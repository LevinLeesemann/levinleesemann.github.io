Für die Rust-Engine habe ich zunächst mit einem einfachen MVP begonnen. Ehrlich gesagt war es ein ziemlich chaotischer erster Versuch. Zu dem Zeitpunkt habe ich Rust noch gelernt und versucht zu verstehen, wie WebAssembly (WASM) über `wasm-bindgen` funktioniert. Mein anfänglicher Ansatz setzte stark auf globale Statics in Rust, da das zunächst der einzige Weg schien, wie JavaScript Speicher mit Rust in einem WASM-Kontext teilen konnte. So sah das in etwa aus:

```rust
static mut OUTPUT: Option<Box<[f32]>> = None;
static mut CONSUMER: Option<NonNull<Consumer>> = None;
static ENGINE: OnceLock<Mutex<Engine>> = OnceLock::new();

#[wasm_bindgen]
pub fn initialize_engine(callback_size: u16, sample_rate: u32) {
	unsafe {
		OUTPUT = ...;
		CONSUMER = ...;
	}

	ENGINE.set(...);
}
```

Wie man sich vorstellen kann, wurde das schnell unübersichtlich. Selbst mit meiner begrenzten Erfahrung im Umgang mit ABIs und Rust war mir klar, dass dies nicht die Struktur sein würde, die langfristig tragfähig ist. Trotzdem reichte es für Experimente und einen Proof of Concept.

Eine Designentscheidung, die sich früh abzeichnete, war, jede native Plattform ihr eigenes Threading-Modell verwalten zu lassen. Zunächst war ich durch technische Einschränkungen dazu gezwungen, da das Erstellen von Threads in Rust für WASM-Ziele zum damaligen Zeitpunkt nicht unterstützt wurde. Wenn man das Problem jedoch etwas sacken lässt, ermöglicht dieser Ansatz auch eine feinere Kontrolle über die Ressourcennutzung, was besonders wichtig ist, da die Hauptnutzer der Audio-Engine mobile Geräte sind, bei denen Akkulaufzeit und Scheduling-Verhalten eine große Rolle spielen.

Zu diesem Zeitpunkt erzeugte der Producer nur eine kontinuierliche Sinuswelle. Ziel war nicht musikalische Komplexität, sondern Vorhersagbarkeit. Ein einfaches Signal machte es viel leichter, das Verhalten über Plattformen hinweg zu validieren, ohne zusätzliche Variablen wie Datei-I/O oder Dekodierung einzuführen.
