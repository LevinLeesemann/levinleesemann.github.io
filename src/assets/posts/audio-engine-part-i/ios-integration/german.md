Die iOS-Seite war mir vertraut, da ich bereits an meiner eigenen Metronom-App gearbeitet hatte. Genauer gesagt hatte ich die Audio Unit API schon einmal genutzt, sodass ich eine grobe Vorstellung davon hatte, wie der Treiber aussehen könnte. Das bedeutete nicht, dass es trivial war, aber wenigstens fing ich nicht komplett bei Null an.

Eine der ersten Hürden war, Rust sauber mit Xcode zusammenarbeiten zu lassen. Ich habe schließlich `cbindgen` verwendet, um C-Header für die Rust-Funktionen zu generieren, was prinzipiell gut funktionierte. Das Einpacken zusammen mit dem kompilierten Code in eine Xcode-freundliche Bibliothek erforderte allerdings einiges an Ausprobieren. Ziel war es, etwas zu schaffen, das niemals im Weg steht und einfach funktioniert – egal, ob das Repository frisch geklont oder zwischen Builds genutzt wird.

Ähnlich wie beim Web-Setup habe ich ein paar kleine Test-Harness-Apps gebaut, um mit der Integration zu experimentieren. Eine nutzte SwiftUI, die andere UIKit, da beide realistische Ziele für die Consumer-Apps waren.

Im iOS-Audiotreiber ist das Threading-Modell ziemlich einfach: Der Producer läuft auf einer `DispatchQueue`, während der Audio-Thread von der Audio Unit API verwaltet wird. Man liefert seinen Audio-Code über ein `AURenderCallback`, und das System ruft diesen auf, sobald mehr Audio benötigt wird. Ein einfaches Beispiel sieht so aus:

```swift
let callback: AURenderCallback = { _, _, _, _, inNumberFrames, ioData in
    // Der Buffer, den die Audio-Unit-API von dir gefüllt haben möchte
    let ioData = ioData!.pointee.mBuffers.mData!.assumingMemoryBound(to: Float.self)

    // Mit Stille beginnen
    ioData.initialize(repeating: 0, count: Int(inNumberFrames))
            
    // Audiodaten einfügen
    for i in 0..<Int(inNumberFrames) {
        ioData.advanced(by: i).pointee += //...
    }
            
    return noErr
}
```

Beim Arbeiten daran stieß ich auf eine Lektion, die im Nachhinein offensichtlich erscheint. Bis dahin hatte ich angenommen, dass ich die Buffergröße von der Core-Seite aus festlegen und der nativen API einfach sagen könnte, was ich möchte. In Wirklichkeit ist das eher eine Anfrage, die man stellen kann, wenn sie schon läuft – ohne Garantie, dass sie erfüllt wird. Üblicherweise lässt man die native Audio-API die bevorzugte Buffergröße bestimmen, da sich diese Präferenz zur Laufzeit ändern kann, sogar von einem Callback zum nächsten. Der dedizierte Audio-Thread bekommt diese Info normalerweise als Kontext und sie muss wieder in die Core-Engine zurückfließen, damit alles synchron bleibt. Im iOS-Audiotreiber gebe ich einfach einen Pointer auf die Callback-Größe weiter, die letztlich von der Core genutzt wird. Wieder innerhalb des `AURenderCallback`:

```swift
let callback: AURenderCallback = { inRefCon, _, _, _, inNumberFrames, _ in
    let context = inRefCon.assumingMemoryBound(to: CallbackContext.self).pointee
    context.callbackSize.pointee = inNumberFrames

    //...
}
```

Diese Erkenntnis führte zu einem kleinen Umweg zurück zur Web-Implementierung, um Buffergrößen zu unterstützen, die von der nativen API bestimmt werden, anstatt eine feste Größe anzunehmen. Es war eine gute Erinnerung, dass Audio-Engines nicht wirklich das Sagen haben. Sie müssen sich anpassen an das, was die Plattform und Hardware in jedem Moment für am besten halten.

Zu diesem Zeitpunkt wurde deutlich, dass die nativen Schichten auf iOS und Web schon ziemlich ähnlich aussahen. Trotzdem war es noch nicht sinnvoll, alles in eine abstrakte Top-Level-Logik zu überführen. Ich wollte außerdem warten, bis Android fertig war, da dort auftretende Einschränkungen leicht verändern könnten, wie die gemeinsamen Teile letztlich gestaltet werden müssen.
