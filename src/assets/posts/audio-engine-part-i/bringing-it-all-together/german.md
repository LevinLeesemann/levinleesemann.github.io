Zu diesem Zeitpunkt schien es mir richtig, einen Schritt zurückzutreten und ein wenig aufzuräumen. Das erste Ziel war, die Logik, die zwischen allen Audio-Treibern gleich war, zu konsolidieren. Ich begann damit, die Web-, iOS- und Android-Funktionen, die durch das KMP-Interface definiert waren, neu zu schreiben. Dabei habe ich aus jeder Implementierung das meiner Meinung nach Beste übernommen und auf die anderen übertragen.

Zur gleichen Zeit hatte ich ein Gespräch mit [Derek](https://github.com/theextremeprogrammer), der mir freundlicherweise die Möglichkeit gegeben hatte, diese Audio-Engine für seine Apps zu schreiben, über die bisherige Nutzung von KMP. Wir stellten fest, dass KMP zunächst hauptsächlich als Interface-Definition diente, aber auch eine andere nützliche Anwendung hatte: die Logik, die zwischen den nativen Layern geteilt wird. Diese Erkenntnis markierte einen kleinen Wendepunkt. KMP beschrieb nun nicht mehr nur, wie Dinge aussehen sollten, sondern definierte Verhalten, das tatsächlich eine Rolle spielt.

Zu diesem Zeitpunkt war die gemeinsame Logik über die nativen Layer bereits ziemlich gut definiert, was sie ideal für testgetriebene Entwicklung (TDD) machte. TDD half, die Intention hinter dem Verhalten zu sichern, während es aus jedem nativen Layer herausgezogen und in Kotlin verschoben wurde. Gleichzeitig machte es das Refactoring deutlich sicherer, da Änderungen schnell validiert werden konnten. Ich begann damit, eine KMP-Klasse zu erstellen, die einen nativen Audio-Treiber als Abhängigkeit übernimmt:

```kotlin
class AudioEngine(private val driver: AudioDriver) {
    fun start() {
        //...
    }

    fun stop() {
        //...
    }

    fun startPlayback() {
        //...
    }

    fun stopPlayback() {
        //...
    }
}
```

Die Funktionen übernehmen im Grunde die Funktionalität, die das `AudioDriver`-Interface ursprünglich bereitgestellt hatte. Für diejenigen, die die Audio-Engine aus einer App heraus verwenden, sind diese Funktionen sehr intuitiv, allerdings passen sie nicht perfekt zu dem, was die nativen Layer jetzt machen, nachdem ein Großteil ihrer Logik entfernt wurde. Das führte zu einer leichten Überarbeitung des `AudioDriver`-Interfaces:

```kotlin
expect interface AudioDriver {
    fun configureInput()
    fun isInputThreadRunning(): Boolean
    fun startInputThread()
    fun stopInputThread()

    // Dasselbe für den Output
    // ...

    fun isPlaybackActive(): Boolean
    fun startPlayback()
    fun stopPlayback()
}
```

Jeder Audio-Treiber ist nun nur noch dafür verantwortlich, mit seiner jeweiligen Audio-API zu interagieren und die Threads zu verwalten. Dabei fällt auch eine kleine Änderung in der Begrifflichkeit auf. Um den Überblick zu behalten und mich stärker an einem Domain-Driven Design orientierten Namensschema zu halten, habe ich auf nativer Ebene `input` und `output` für `producer` und `consumer` verwendet, während `producer` und `consumer` weiterhin für den Core reserviert bleiben.

Danach nutzte ich eine Mocking-Bibliothek, um Tests zu schreiben. Das funktionierte überraschend gut und machte die ersten Fortschritte ziemlich reibungslos. Gleichzeitig offenbarte es eine kleine Schwäche im KMP-Ökosystem: solide, ergonomische Testing-Bibliotheken sind noch etwas begrenzt, und manche erfordern Annotations oder zusätzlichen Setup-Aufwand für den zu testenden Code.

Dann schlug Derek etwas vor, woran ich zuvor nicht gedacht hatte: keine Mocking-Bibliothek zu verwenden. Das kam mir zunächst fremd vor, aber nach einigem Hin- und Her und nachdem wir das kurz diskutiert hatten, beschlossen wir, vorerst auf die Bibliothek zu verzichten und stattdessen eigene Spies, Stubs usw. zu schreiben.

Das erwies sich als sehr positive Erfahrung. Der Test-Code wurde einfacher zu verstehen, weniger abhängig von Tool-Magie und half mir, ein besseres Verständnis dafür zu entwickeln, wie Testing-Bibliotheken unter der Haube arbeiten. Seitdem experimentiere ich weiterhin mit handgeschriebenen Test-Doubles im Projekt, und es ist etwas, das ich auch in Zukunft als Werkzeug behalten werde.
