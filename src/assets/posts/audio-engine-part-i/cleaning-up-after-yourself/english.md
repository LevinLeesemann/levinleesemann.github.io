One of the last hurdles was handling the Rust engine’s global statics and giving it a proper lifecycle. While working on the Android portion, I had already experimented with ways to manage resources, specifically using `AutoCloseable` in Kotlin and simple `new` and `delete` calls in the JNI layer, just to keep a single C++ Oboe class alive across multiple function calls.

For Rust, my first instinct had been to pass pointers between the native layers and Rust. Back then, the web integration was tricky, especially with shared memory in WASM, and so I ended up relying on global statics just to make things work.

When I revisited this problem later, I realized WASM actually allows pointers to be passed to JavaScript, where they each just show up as a `number`. That insight opened the door to a much cleaner approach: using an opaque pointer pattern. Each native layer could receive a pointer without knowing its type, and Rust alone would handle what the pointer actually points to. The native code just passes it back and forth, so that the Rust layer knows which instance of the engine to act on.

This made the foreign function interface (FFI) much simpler. All the unsafe Rust operations are confined to unwrapping the pointer in the FFI layer. Once that’s done, the rest of the Rust engine can run safely without touching unsafe memory directly. This looks a bit like this in practice:

```rust
// Creating an audio engine
#[no_mangle]
pub extern "C" fn audio_engine_create() -> *mut AudioEngine {
    Box::into_raw(Box::new(AudioEngine::new()))
}

// Destroying an audio engine
#[no_mangle]
pub extern "C" fn audio_engine_destroy(engine: *mut AudioEngine) {
    unsafe { drop(Box::from_raw(engine)); }
}
```

There was one additional wrinkle: I needed the same function to work across both web and native platforms, however they require slightly different declarations at the function level. To avoid writing it twice, I created a Rust macro that generates two versions—one for `wasm-bindgen` on the web and one for `cbindgen` on iOS and Android. The macro keeps the implementations synchronized and reduces boilerplate, letting me maintain a single source of truth for pointer handling.