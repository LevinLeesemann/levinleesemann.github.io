At this point, the project finally felt stable enough to justify investing in automation. Each targeted platform was working end to end, the builds were repeatable, and there were now tests worth running consistently.

This timing also felt important in light of what came next. The upcoming work would involve more tests and would be adding features to a point where this audio engine would be integrated in Gap Click, meaning that publishing artifacts for each of the target platforms was also an upcoming requirement.

One pain point that remained was the number of different build steps involved. None of them were particularly complex, but you did have to know how to build the Rust core, how to build each native layer, and how they all fit together. Derek suggested using Makefiles as a way to hide that complexity behind a small set of well-defined commands. I hadn't used Makefiles since college, however integrating them here reminded me of how useful they can really be.

The result was a top-level Makefile that itself would reference Makefiles in the core, platform, and native layers. Each layer still owns its own build logic, but the top-level Makefile acts as a single entry point:

```makefile
build: build-android build-ios build-web

build-android:
	$(MAKE) -C android build

build-ios:
	$(MAKE) -C ios build

build-web:
	$(MAKE) -C web build

#...
```

When it came time to write the GitHub Actions (GHA) pipelines, this proved to be a useful investment for modular and predictable build steps that could be run in parallel with minimal steps in GHA workflows.
