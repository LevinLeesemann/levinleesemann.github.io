Web wasn't chosen arbitrarily as the first native integration. I had already used the audio APIs on Android and iOS when I worked on my metronome app, Tempus, but before committing to the cross-platform architecture, I needed to see if the web would work in the way that I expected it to.

I started with a basic KMP interface that defined a few simple functions a consumer app (like Gap Click or Beat Note) could call. At this point, it was mostly about figuring out how apps would interact with the engine in principle:

```kotlin
expect interface AudioDriver {
    fun play()

    fun pause()

    fun start()

    fun stop()
}
```

The `expect` part of the interface is part of the [`expect`/`actual`](https://kotlinlang.org/docs/multiplatform/multiplatform-expect-actual.html) pattern in KMP (in case you're interested), since JavaScript requires a slightly different interface when compared to iOS and Android (namely an `external` interface along with some annotations)

On the web side, I set up a straightforward TypeScript library for the Web Audio API integration and a test harness website using Vite. The harness mimicked a consumer app so I could experiment with playback in a controlled environment. It was rough, but it let me play around with the concepts before committing to anything more complicated.

Finally, I was able to write an `AudioWorklet` to call into the Rust WASM code to read some basic audio data (a continuously generated sine wave). Unfortunately, this was another learning curve. Managing shared memory in WASM is tricky, and without care certain parts of the WASM code would be reinitialized and, at times, break the entire integration.

I spent a lot of time reading through docs, and even ended posting an issue on the `wasm-bindgen` GitHub page. The integration between TypeScript and Rust WASM caused quite a few frustrating nights and weekends of development.

Despite all the rough edges, it worked. I could `start`, `stop`, `play`, and `pause` the engine, and play back the generated audio from Rust in real time. It wasn't neat, and I knew there was a better way, but it proved that Rust and WASM could actually serve as a foundation for a cross-platform audio engine, even on the web.
