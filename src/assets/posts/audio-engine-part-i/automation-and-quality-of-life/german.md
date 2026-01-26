An diesem Punkt fühlte sich das Projekt endlich stabil genug an, um in Automatisierung zu investieren. Jede Zielplattform funktionierte von Anfang bis Ende, die Builds waren reproduzierbar, und es gab jetzt Tests, die es wert waren, regelmäßig ausgeführt zu werden.

Das Timing schien auch im Hinblick auf die nächsten Schritte wichtig. Die kommende Arbeit würde mehr Tests beinhalten und neue Features hinzufügen, sodass die Audio-Engine schließlich in Gap Click integriert würde. Das bedeutete auch, dass das Veröffentlichen von Artefakten für jede Zielplattform ein bevorstehender Schritt war.

Ein verbleibender Schmerzpunkt war die Vielzahl an Build-Schritten. Keiner war besonders komplex, aber man musste wissen, wie man den Rust-Core baut, wie man jede native Schicht baut und wie alles zusammenpasst. Derek schlug vor, Makefiles zu verwenden, um diese Komplexität hinter einer kleinen Menge klar definierter Befehle zu verbergen. Ich hatte Makefiles seit dem Studium nicht mehr genutzt, aber ihre Integration hier erinnerte mich daran, wie nützlich sie wirklich sein können.

Das Ergebnis war ein Top-Level-Makefile, das selbst auf Makefiles in Core-, Plattform- und nativen Schichten verweist. Jede Schicht behält weiterhin ihre eigene Build-Logik, aber das Top-Level-Makefile dient als ein einziger Einstiegspunkt:

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

Als es an die GitHub Actions-Pipelines ging, stellte sich dies als nützliche Investition heraus. Modularisierte und vorhersehbare Build-Schritte konnten jetzt parallel ausgeführt werden, mit minimalem Aufwand in den GHA-Workflows.
