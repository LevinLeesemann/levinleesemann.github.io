Web wurde nicht willkürlich als erste Plattform gewählt. Ich hatte die Audio-APIs auf Android und iOS bereits bei meiner Metronom-App [Tempus](https://github.com/LevinLeesemann/Tempus) genutzt, aber bevor ich mich auf die Cross-Platform-Architektur festlegte, wollte ich erst sehen, ob das Web so funktionieren würde, wie ich es mir vorstellte.

Ich begann mit einem einfachen KMP-Interface, die ein paar grundlegende Funktionen definierte, die eine Consumer-App wie Gap Click oder Beat Note aufrufen könnte. Zu diesem Zeitpunkt ging es hauptsächlich darum, zu verstehen, wie Apps grundsätzlich mit der Engine interagieren würden:

```kotlin
expect interface AudioDriver {
    fun play()

    fun pause()

    fun start()

    fun stop()
}
```

Der `expect`-Teil des Interfaces ist Teil des [expect/actual-Patterns](https://kotlinlang.org/docs/multiplatform/multiplatform-expect-actual.html) in KMP, falls man sich dafür interessiert. JavaScript benötigt hier ein leicht anderes Interface im Vergleich zu iOS und Android, nämlich ein external-Interface zusammen mit einigen Annotationen.

Für die native Web-Schicht richtete ich eine einfache TypeScript-Bibliothek ein sowie eine Test-Harness-Website mit Vite. Das Harness ahmte eine Consumer-App nach, sodass ich die Wiedergabe in einer kontrollierten Umgebung ausprobieren konnte. Es war noch sehr roh, aber es erlaubte mir, mit den Konzepten zu spielen, bevor ich mich auf etwas Komplizierteres festlegte.

Schließlich konnte ich ein `AudioWorklet` schreiben, das in den Rust-WASM-Code aufrief, um einfache Audiodaten zu lesen (eine kontinuierlich generierte Sinuswelle). Leider war das eine weitere steile Lernkurve. Gemeinsamer Speicher in WASM ist knifflig, und ohne Sorgfalt würden Teile des WASM-Codes neu initialisiert werden und manchmal die gesamte Integration zum Absturz bringen.

Ich habe viel Zeit damit verbracht, Dokumentationen durchzulesen, und am Ende sogar ein Issue auf der  `wasm-bindgen` GitHub-Seite gepostet. Die Integration zwischen TypeScript und Rust-WASM sorgte für einige frustrierende Nächte und Wochenenden. So konnte ich es am Ende zum Laufen bringen:

```typescript
export class WebAudioDriver implements AudioDriver {
    // Diese müssen an die Producer- und Consumer-Threads übergeben werden
    private module?: ArrayBuffer
    private nativeMemory: SharedArrayBuffer
    private wasmMemory?: WebAssembly.Memory

    constructor() {
        this.nativeMemory = new SharedArrayBuffer(40)
    }

    async initialize() {
        const response = await fetch(new URL("...", import.meta.url))
        this.module = await response.arrayBuffer()
        this.wasmMemory = new WebAssembly.Memory({
            initial: 512,
            maximum: 1024,
            shared: true,
        })

        initSync({ module: this.module, memory: this.wasmMemory })

        const nativeMemory = new Int32Array(this.nativeMemory)
    }

    //...
}
```

Trotz all der rauen Kanten funktionierte es am Ende. Ich konnte die Engine starten, stoppen, play und pause ausführen und die von Rust erzeugte Audio in Echtzeit abspielen. Es war nicht perfekt, und ich wusste, dass es einen besseren Weg gab, aber es zeigte, dass Rust und WASM tatsächlich als Basis für eine plattformübergreifende Audio-Engine, selbst im Web, dienen könnten.
