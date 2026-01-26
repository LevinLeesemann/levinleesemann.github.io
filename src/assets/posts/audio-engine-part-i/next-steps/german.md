Der unmittelbarste Schritt ist, über generierte Sinuswellen hinauszugehen und echte Audioinhalte zu verwenden. Das bedeutet, einzelne Audio-Clips zu laden und abzuspielen, angefangen bei einfachem One-Shot-Sample-Playback.

Ein weiteres zentrales Ziel ist die End-to-End-Integrationstests für jede native Schicht. Unit-Tests und Tests für gemeinsame Logik sind wichtig, aber Änderungen auf Treiber-Ebene können auf subtile Weise Probleme verursachen. Die Gewissheit, dass Web, iOS und Android von oben bis unten korrekt funktionieren, erleichtert zukünftige Refaktorisierungen erheblich.

Darüber hinaus muss die Build-Pipeline so eingerichtet werden, dass sie nutzbare Artefakte erstellt, damit Verbraucherprojekte die Engine unkompliziert integrieren können und die Audio-Engine vollständig in Gap Click
 und Beat Note
 eingebunden werden kann.

Sobald diese Schritte erledigt sind, werde ich mich wieder auf den Kern selbst konzentrieren. Dazu gehört das Veröffentlichen von Events aus der Engine, die Unterstützung komplexerer Sequenzen über One-Shot-Playback hinaus und die Entwicklung von Verhalten, das dem ähnelt, was DAWs unter der Haube tun. Ebenso wichtig ist die Gestaltung eines sauberen Interfaces, über die Verbraucher mit dieser Sequenzierungslogik interagieren können.

Seid gespannt auf den nächsten Beitrag zur Audio-Engine in den kommenden Monaten!
