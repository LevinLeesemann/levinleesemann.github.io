Eine der letzten Hürden war es, mit den globalen Statics der Rust-Engine umzugehen und ihr einen richtigen Lebenszyklus zu geben. Während ich am Android-Teil gearbeitet habe, hatte ich bereits ein paar Ansätze ausprobiert, um Ressourcen zu verwalten – konkret nutzte ich `AutoCloseable` in Kotlin und einfache `new`- und `delete`-Aufrufe in der JNI-Schicht, nur um eine einzelne C++ Oboe-Klasse über mehrere Funktionsaufrufe zwischen den Glue-Layern am Leben zu halten.

Was die globalen Statics betrifft, war mein erster Impuls, Pointer zwischen den nativen Layern und der Core-Schicht zu übergeben. Als ich damals mit dem Web-Integrationsteil anfing, war das allerdings knifflig, besonders im Hinblick auf den geteilten Speicher in WASM. Deshalb griff ich zunächst auf globale Statics zurück, nur um das Ganze zum Laufen zu bringen.

Beim späteren Überarbeiten dieses Problems wurde mir klar, dass WASM tatsächlich Pointer an JavaScript übergeben kann, die dort einfach als `number` auftauchen. Diese Erkenntnis eröffnete einen deutlich saubereren Ansatz: das Verwenden eines [opaque pointer-Patterns](https://en.wikipedia.org/wiki/Opaque_pointer). Jede native Schicht kann einen Pointer erhalten, ohne den Typ kennen zu müssen, und die Core-Schicht kümmert sich um das Unwrappen und Dereferenzieren des Pointers. Der native Code gibt ihn nur hin und her, sodass die Core-Schicht auf die richtige Instanz der Engine zugreifen kann.

Dadurch wurde noch deutlicher, dass ich hier eigentlich mit einem [foreign function interface]() (FFI) arbeite – etwas, das mit globalen Statics nicht so offensichtlich war. Alle unsafe Rust-Operationen sind jetzt auf das Unwrappen des Pointers in der FFI-Schicht beschränkt. Sobald das erledigt ist, kann der Rest der Rust-Engine sicher laufen, ohne direkt unsicheren Speicher anzufassen. Praktisch sieht das zum Beispiel so aus:

```rust
// Erstellen einer Audio-Engine
#[no_mangle]
pub extern "C" fn audio_engine_create() -> *mut AudioEngine {
    Box::into_raw(Box::new(AudioEngine::new()))
}

// Zerstören einer Audio-Engine
#[no_mangle]
pub extern "C" fn audio_engine_destroy(engine: *mut AudioEngine) {
    unsafe { drop(Box::from_raw(engine)); }
}
```

Ein weiterer Kniff war, dass dieselbe Funktion sowohl für Web als auch für native Plattformen funktionieren musste, die jedoch leicht unterschiedliche Deklarationen auf Funktionsebene benötigen. Um sie nicht zweimal schreiben zu müssen, habe ich ein Rust-Makro erstellt, das zwei Versionen erzeugt – eine für `wasm-bindgen` (Web) und eine für `cbindgen` (iOS und Android). Das Makro hält die Implementierungen synchron und reduziert Boilerplate, sodass ich eine einzige Quelle der Wahrheit für jede FFI-Funktion pflegen kann.
