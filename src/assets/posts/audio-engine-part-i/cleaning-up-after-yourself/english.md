One of the last hurdles was handling the Rust engine’s global statics and giving it a proper lifecycle. While working on the Android portion, I had already experimented with ways to manage resources, specifically using `AutoCloseable` in Kotlin and simple `new` and `delete` calls in the JNI layer, just to keep a single C++ Oboe class alive across multiple function calls between glue layers.

With regard to the global statics, my first instinct was to pass pointers between the native and core layers. Back when I started on the project, the web integration was tricky though, especially with shared memory in WASM, and so I ended up relying on global statics just to make things work.

When I revisited this problem later, I realized WASM actually allows pointers to be passed to JavaScript, where they just show up as a `number`. That insight opened the door to a much cleaner approach: using an [opaque pointer](https://en.wikipedia.org/wiki/Opaque_pointer) pattern. Each native layer could receive a pointer without needing to know its type, and the core would handle pointer unwrapping and dereferencing. The native code just passes it back and forth, so that the core can act on the correct instance of the engine.

This made it clearer that I was really working with a [foreign function interface](https://en.wikipedia.org/wiki/Foreign_function_interface) (FFI), something that wasn't so obvious with the global statics. All the unsafe Rust operations are now confined to unwrapping the pointer in the FFI layer. Once that’s done, the rest of the Rust engine can run safely without touching unsafe memory directly. This is what that looks like in practice:

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

There was one additional wrinkle: I needed the same function to work across both web and native platforms, however they require slightly different declarations at the function level. To avoid writing it twice, I created a Rust macro that generates two versions, one for `wasm-bindgen` (web) and one for `cbindgen` (iOS and Android). The macro keeps the implementations synchronized and reduces boilerplate, letting me maintain a single source of truth for each FFI function.
