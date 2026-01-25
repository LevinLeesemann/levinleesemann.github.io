For the Rust engine I started off with a simple MVP. It was honestly a messy first attempt. At the time, I was still learning Rust and trying to understand how WebAssembly (WASM) worked through `wasm-bindgen`. My initial approach relied heavily on global statics in Rust, since that seemed like the only way to let JavaScript share memory with Rust in a WASM context. Here's roughly what that looked like:

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

As you might expect, this got unwieldy quickly. Even with my limited experience with working on ABIs and Rust, it was obvious that this was't the structure that would be standing in the long run. Regardless, it was enough for experimentation and a proof of concept.

One design decision that emerged early though, was to let each native platform manage its own threading model. I was pushed towards this at first due to technical constraints, since creating threads in Rust for WASM targets wasn't supported at the time of writing. After letting this problem simmer though, this approach also enables finer-grained control over resource usage, which was especially important considering the main consumers of this audio engine are mobile devices where battery life and scheduling behavior matter a lot.

At this stage, the producer would only generate a continuous sine wave. The goal was not musical complexity, but predictability. A simple signal made it much easier to validate behavior across platforms without introducing additional variables like file I/O or decoding.
