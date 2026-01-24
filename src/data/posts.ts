import audioEnginePartIThumbnailDark from "../assets/posts/audio-engine-part-i/thumbnail/dark.png"
import audioEnginePartIThumbnailLight from "../assets/posts/audio-engine-part-i/thumbnail/light.png"
import type { Post } from "../models/post"

export const posts: Post[] = [
  {
    id: "audio-engine-part-i",
    title: {
      english: "Audio Engine (Part I)",
      german: "Audio-Engine (Teil I)",
    },
    datePosted: new Date(2025, 0, 20),
    preview: {
      english: "Exploring the design and implementation of the fundamental components of a cross-platform audio engine for iOS, Android, and Web — ranging from technology selection to nitty gritty implementation challenges",
      german: "Erkundung des Designs und der Implementierung der grundlegenden Komponenten einer plattformübergreifenden Audio-Engine für iOS, Android und das Web — von der Technologieauswahl bis hin zu detaillierten Herausforderungen bei der Implementierung.",
    },
    sections: [
      {
        id: "whats-the-problem",
        title: {
          english: "What's the problem?",
          german: "Worum geht es eigentlich?",
        },
        content: [
          {
            english: "When I was offered the chance to build a cross-platform audio engine for Gap Click and Beat Note, the underlying motivation was very practical. They both currently use a similar open-source audio stack, which works reasonably well in isolation, but maintaining and updating their respective components separately has become tedious and prone to bugs over time.",
            german: "",
          },
          {
            english: "Additionally, Gap Click runs on Android and iOS, while Beat Note is currently only supported on iOS, meaning that as more platforms are added, the amount of audio code to maintain continues to grow.",
            german: "",
          },
          {
            english: "It made sense to consider a unified solution designed to serve both apps and future projects. Ideally, this engine would provide a consistent interface so that whether on iOS, Android, or web, its interface and behavior would remain consistent. Cross-platform support was not just a nice-to-have; it was essential.",
            german: "",
          },
          {
            english: "The current open-source stack, along with other available alternatives, either lack the capabilities needed for current and future features, are not maintained actively enough for multiple production apps, or do not offer sufficient testing, documentation, or extensibility. That is when the idea for a custom, shared audio layer started to take shape, one that could be controlled, extended, and relied upon across all apps, without needing to reimplement the same logic on each platform.",
            german: "",
          },
        ],
      },
      {
        id: "the-idea",
        title: {
          english: "The idea",
          german: "Die Idee",
        },
        content: [
          {
            english: "An obvious problem up front was that whatever ended up being built had to integrate with each platform's native audio system. If you take a quick look at the real-time editing and playback features that Gap Click and Beat note provide, it becomes quite obvious that high level APIs on each platform will not suffice, as they often only offer simple scheduling and playback controls. Ultimately, that meant I would be working with Audio Unit on iOS, Oboe on Android, and the Web Audio API on web.",
            german: "",
          },
          {
            english: "As previously stated, one of the main goals was to reduce duplicated logic across platforms. Both Gap Click and Beat Note already handle some shared code using Kotlin Multiplatform (KMP), which lets you write common logic once and call it from each target's native code. This approach works well for higher-level logic, but low-level audio has some tighter requirements.",
            german: "",
          },
          {
            english: "A key piece of logic that needed to be shared is the system that controls how audio is sequenced, played back, and integrated with (to emits events, for example). KMP was considered for this purpose, but there are a couple of problems.",
            german: "",
          },
          {
            english: "On Android, Oboe is a C++ API (which in turn requires going through JNI), and more importantly, real-time audio guarantees are extremely hard to meet in a garbage-collected environment like the JVM. This makes handling timing-sensitive audio logic purely in KMP a non-starter. Web and iOS don't quite have the same issues due to dedicated audio threads, but after some initial research and investigation integrating KMP generated logic with them also appeared as though it wouldn't be as straightforward as it seemed.",
            german: "",
          },
          {
            english: "Most developers in this space would automatically reach for C++, since it's the standard for low-level audio work. But another option had been making noise in recent years: Rust. It provides safer memory management, excellent performance, arguably better ergonomics for developers than C++, and C-style ABI integration (we'll discuss this throughout each native layer's section). At the time of evaluation, Rust hadn't been used widely in mainstream audio apps, which made it an exciting chance to learn a new language while working in a domain I was already familiar with.",
            german: "",
          },
          {
            english: "You might be wondering how Kotlin Multiplatform fits in if Rust is handling the shared audio logic. That will be explained later in the post, but at a high level, the stack looks like this: Kotlin Multiplatform for shared app logic, native layers on each platform for audio integration, and Rust for the underlying real-time audio engine.",
            german: "",
          },
        ],
      },
      {
        id: "the-inner-workings-of-audio-systems",
        title: {
          english: "The inner workings of audio systems",
          german: "Wie Audiosysteme intern funktionieren",
        },
        content: [
          {
            english: "We could definitely get into the nitty gritty of digital audio, but at a high level audio is represented as a sequence of floating point values. Each float is typically between -1.0 and 1.0 and represents the amplitude of the signal at a given point in time. Rather than working with individual samples, audio systems process these values in chunks (buffers). For reference, buffers are typically powers of two in size, often around 256 or 512 samples.",
            german: "",
          },
          {
            english: "Most real-time audio systems are built around a producer-consumer model. There is usually a dedicated audio thread that acts as the consumer, being owned by the platform's audio system, and it's responsible for pulling buffers at a very precise interval (often tied closely to the underlying audio hardware). The consumer looks slightly different on each platform in this project, for example an AudioWorklet on the web or an Audio Unit callback on iOS, however they ultimately follow the same kind of logic (more on that later).",
            german: "",
          },
          {
            english: "On the other side is the producer, which is responsible for generating audio data ahead of time. This typically runs on a separate thread, not the main UI thread, and continuously fills buffers with audio samples so they are ready when the audio thread asks for them.",
            german: "",
          },
          {
            english: "The producer and consumer are most commonly connected using a ring buffer. A ring buffer is a contiguous block of memory that is reused in a circular fashion. When the producer reaches the end of the buffer, it wraps back around to the beginning. For audio, this works well by keeping the producer slightly ahead of the consumer, usually by a few buffers. As the consumer reads buffers and the producer writes new ones, both advance through the ring at (roughly) the same pace.",
            german: "",
          },
          {
            english: "If the producer ever falls too far behind, the consumer has nothing to play, which results in audible glitches, such as clicks and pops (artifacts). While the model is simple in theory, it places strict constraints on timing, memory allocation, and thread behavior, and those constraints end up driving many of the design decisions down the road.",
            german: "",
          },
          {
            english: "One key thing to note at this point is that the consumer needs to run in real-time, meaning no blocking operations (such as memory allocation, I/O, etc.). The producer doesn't quite have this constraint since it's a few buffers ahead, but it should still stick to performant operations as to not fall too far behind.",
            german: "",
          },
        ],
      },
      {
        id: "the-core-not-the-movie",
        title: {
          english: "The core (not the movie)",
          german: "Der Innere Kern (nicht der Film)",
        },
        content: [
          {
            english: "For the Rust engine I started off with a simple MVP. It was honestly a messy first attempt. At the time, I was still learning Rust and trying to understand how WebAssembly worked through wasm-bindgen. My initial approach relied heavily on global statics in Rust, since that seemed like the only way to let JavaScript interact with Rust state in a WASM context. Here's what that looked like, roughly:",
            german: "",
          },
          "static mut OUTPUT: Option<Box<[f32]>> = None;\nstatic mut CONSUMER: Option<NonNull<Consumer>> = None;\nstatic ENGINE: OnceLock<Mutex<Engine>> = OnceLock::new();\n\n#[wasm_bindgen]\npub fn initialize_engine(callback_size: u16, sample_rate: u32) {\n\tunsafe {\n\t\tOUTPUT = ...;\n\t\tCONSUMER = ...;\n\t}\n\n\tENGINE.set(...);\n}",
          {
            english: "As you might expect, this got unwieldy quickly. Even with my limited experience with working on ABIs and Rust, it was obvious that this was't the structure that would be standing in the long run. Regardless, it was enough for experimentation and a proof of concept.",
            german: "",
          },
          {
            english: "One design decision that emerged early was to let each native platform manage its own threading model. I was pushed towards this at first due to technical constraints, since creating threads in Rust for WASM targets wasn't supported at the time of writing. After letting this problem simmer though, this approach also enables finer-grained control over resource usage, which was especially important considering the main consumers of this audio engine are mobile devices where battery life and scheduling behavior matter a lot.",
            german: "",
          },
          {
            english: "At this stage, the producer would only generate a continuous sine wave. The goal was not musical complexity, but predictability. A simple signal made it much easier to validate behavior across platforms without introducing additional variables like file I/O or decoding.",
            german: "",
          },
        ],
      },
      {
        id: "web-first",
        title: {
          english: "Web first",
          german: "Web zuerst",
        },
        content: [
          {
            english: "Web wasn't chosen arbitrarily as a platform starting point. I had already used the audio APIs on Android and iOS when I worked on my metronome app, Tempus, but before committing to the cross-platform architecture, I needed to see if the web would work in the way that I expected it to.",
            german: "",
          },
          {
            english: "I started with a basic KMP interface that defined a few simple functions a consumer app (like Gap Click or Beat Note) could call, such as \"play\" and \"pause\". At this point, it was mostly about figuring out how apps would interact with the engine in principle.",
            german: "",
          },
          {
            english: "On the web side, I set up a straightforward TypeScript library for the Web Audio API integration and a test harness website using Vite. The harness mimicked a consumer app so I could experiment with playback in a controlled environment. It was rough, but it let me play around with the concepts before committing to anything more complicated.",
            german: "",
          },
          {
            english: "Finally, I was able to write an AudioWorklet to call into the Rust WASM code to read some basic audio data (a continuously generated sine wave). Unfortunately, this was another learning curve. Managing shared memory in WASM is tricky, and without care certain parts of the WASM code would be reinitialized and, at times, break the entire integration.",
            german: "",
          },
          {
            english: "I spent a lot of time reading through docs, and even ended posting an issue on the wasm-bindgen GitHub page. The integration between TypeScript and Rust WASM caused quite a few frustrating nights and weekends of development.",
            german: "",
          },
          {
            english: "Despite all the rough edges, it worked. I could \"start\", \"stop\", \"play\", and \"pause\" the engine, and play back the generated audio from Rust in real time. It wasn't neat, and I knew there was a better way, but it proved that Rust and WASM could actually serve as a foundation for a cross-platform audio engine, even on the web.",
            german: "",
          },
        ],
      },
      {
        id: "ios-integration",
        title: {
          english: "iOS integration",
          german: "iOS-Integration",
        },
        content: [],
      },
      {
        id: "android-integration",
        title: {
          english: "Android integration",
          german: "Android-Integration",
        },
        content: [],
      },
      {
        id: "bringing-it-all-together",
        title: {
          english: "Bringing it all together",
          german: "Die Zusammenführung",
        },
        content: [],
      },
      {
        id: "revisiting-the-web",
        title: {
          english: "Revisiting the web",
          german: "Zurück zum Web",
        },
        content: [],
      },
      {
        id: "automation-and-quality-of-life",
        title: {
          english: "Automation and quality of life",
          german: "Automatisierung und Entwickler-Ergonomie",
        },
        content: [],
      },
      {
        id: "lessons-learned",
        title: {
          english: "Lessons learned",
          german: "Erkenntnisse",
        },
        content: [],
      },
      {
        id: "next-steps",
        title: {
          english: "Next steps",
          german: "Wie es weitergeht",
        },
        content: [],
      },
    ],
    thumbnailUrl: {
      dark: audioEnginePartIThumbnailDark,
      light: audioEnginePartIThumbnailLight,
    },
  },
].sort((a, b) => b.datePosted.getTime() - a.datePosted.getTime())
