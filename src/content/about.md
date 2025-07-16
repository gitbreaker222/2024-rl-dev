---
showDevLinks: true
---

# Über diese Seite

Hier gibt es eine Beschreibung über verschiedene technische Details zu dieser Seite - **Work in Progress …**

## Multilanguage Support

Die Inhalte können auf mehreren Sprachen gepflegt werden. Die Startseite unter /home ist z.B. auf englisch und deutsch. Die Sprache kann in der header-navigation geändert werden. Die Sprachauswahl wird nur für Seiten angezeigt, die mehrsprachig verfügbar sind.

## Version marker

Im Footer gibt es einen generierten Versionsmarker. Das hilft beim Abgleich verschiedener Auslieferungs-Stände, wenn verschiedene Leute (Devs, Kunden, End-user) die Anwendung in verschiedenen Kontexten benutzen.

Außerdem ist die Version mit dem commit im Quellcode verlinkt.

## Serverside / Clientside Rendering

SSG with SSR and interactive (Svelte) 

Die Seite ist mit dem Static-Site-Generator (SSG) [Astro JS](https://astro.build/) erstellt. Die Seiten werden aus dem Quellcode einmal zusammengebaut und dann als Statische-Webseite auf dem Server gehostet. Das fertige HTML kann effizienter ausgespielt werden, als eine Client-Seite Anwendung, bei der auf dem Gerät des users das UI mit JS fertig gerendert wird.

Dennoch können auch interaktive Components eingesetzt werden. Dafür können verschieden Frontend-Frameworks wie z.B. [Svelte](https://svelte.dev) integriert werden. Siehe [Flowbite…](#advanced-ui-with-flowbite-components) unten

## Minimal Styling with Pico CSS

Für das Styling wollte ich so wenig CSS wie möglich schreiben und eine fertige Bibliothek einsetzen, die modern, elegant, anpassbar und für generierten MarkDown-Content geeignet ist.

[PicoCSS](https://picocss.com/) ist kleines Framework das auf semantisches HTML ausgerichtet ist. Die Styles können also auf ganz normal strukuriertes HTML angewendet werden, ohne dass CSS-Klassen etwa Listen gesetzt werden müssen. Es gibt aber auch Klassen, die z.B. in den .astro-files zum layouten genutzt werden können. Außerdem eine Reihe an CSS-Variablen, mit denen sich das Theme gestalten lässt.

## Advanced UI with Flowbite Components

Für einfache Seiten mit Fokus auf Text reicht es MarkDown zu stylen. Für viele Dinge braucht man aber komplexere UI-Komponenten - etwa für Administrations-Oberflächen. Für digitale Formulare und andere datenintensive Anwendungen gibt es immer wieder ähnliche Anforderungen, die in Design-Systemen wie Material-Design (google), Carbon (IBM) oder [lightning (salesforce)](lightning) fertig ausgearbeitet sind. Nicht nur das grafische Design, sondern die ganze Handhabung von Maus bis touch, smartphone-screen bis beamer.

Ich habe mich für diese Seite darüber hinaus dafür interessiert, ob es auch professionelle Lösung gibt abseits der typischen U.S.-Tech-Giganten gibt, um problematischen Abhängigkeiten vorzubeugen.

Flowbite aus Ungarn scheint mir dafür sehr gut geeignet, ist open-source, supportet alle gängigen Frontend-Frameworks und baut auf dem bewärten Tailwind-System auf 

[lightning]: https://www.lightningdesignsystem.com/

## Curated Software Sources

TODO

- Flowbite from Hungary alternative to Material Design (google / alphabet)
- Svelte alternative to react (Facebook / meta)

## Easter Eggs

TODO

Checkout the Fax link in the contact info. The emoji library behind that is made at the Hochschule für Gestaltung Schwäbisch Gmünd