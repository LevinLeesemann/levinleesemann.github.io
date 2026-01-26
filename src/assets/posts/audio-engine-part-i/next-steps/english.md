The most immediate step is moving beyond generated sine waves and into real audio content. That means loading and playing individual audio clips, starting with simple one-shot sample playback.

Another priority is end-to-end integration testing for each native layer. Unit tests and shared logic tests go a long way, but changes at the driver level are where things can break in subtle ways. Having confidence that web, iOS, and Android all behave correctly from top to bottom will make future refactors much easier to approach.

To round out the above, the build pipeline needs to start producing consumable artifacts, so that consumer projects have a straightforward way to integrate it, and the audio engine can be fully integrated into Gap Click and Beat Note.

Once those pieces are in place, my focus will shift back to the core itself. That includes publishing events from the engine, supporting more complex sequencing beyond one-shot playback, and building toward behavior that resembles what DAWs do under the hood. Just as important will be designing a clean interface that consumers can use to interact with that sequencing logic.

Be on the lookout for the next audio engine blog post in the coming months!
