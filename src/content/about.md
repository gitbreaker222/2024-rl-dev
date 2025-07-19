---
showDevLinks: true
---

# Über diese Seite

Hier gibt es eine Beschreibung über verschiedene technische Details zu dieser Seite - **Work in Progress …**

## Multilanguage Support

Die Inhalte können auf mehreren Sprachen gepflegt werden. Die Startseite unter /home ist z.B. auf englisch und deutsch. Die Sprache kann in der header-navigation geändert werden. Die Sprachauswahl wird nur für Seiten angezeigt, die mehrsprachig verfügbar sind.

## Version marker

Im Footer gibt es einen automatisch generierten Versionsmarker. Das hilft beim Abgleich verschiedener Auslieferungs-Stände, wenn verschiedene Leute (Devs, Kunden, End-user) die Anwendung in verschiedenen Kontexten benutzen.

Außerdem ist die Version mit dem commit im Quellcode verlinkt.

## Serverside / Clientside rendering

Die Seite ist mit dem Static-Site-Generator (SSG) [Astro JS](https://astro.build/) erstellt. Die Seiten werden aus dem Quellcode serverseitig einmal zusammengebaut / gerendert (SSR) und dann als Statische-Webseite auf dem Server gehostet. Das fertige HTML kann effizienter ausgespielt werden, als eine Client-seitige Anwendung, bei der auf dem Empfangsgerät das UI mit JavaScript fertig gerendert wird.

Dennoch können auch interaktive Components eingesetzt werden. Dafür können verschieden Frontend-Frameworks wie z.B. [Svelte](https://svelte.dev) (React, Vue, ...) integriert werden. Siehe auch [Flowbite…](#advanced-ui-with-flowbite-components) unten.

## Minimal Styling with Pico CSS

Für das Styling wollte ich so wenig CSS wie möglich schreiben und eine fertige Bibliothek einsetzen, die modern, elegant, anpassbar und für generierten MarkDown-Content geeignet ist.

[PicoCSS](https://picocss.com/) ist kleines Framework das auf semantisches HTML ausgerichtet ist. Die Styles können also auf ganz normal strukuriertes HTML angewendet werden, ohne dass CSS-Klassen gesetzt werden müssen. 

Es gibt aber auch Klassen, die z.B. in den `.astro`-files zum layouten genutzt werden können. Außerdem eine Reihe an CSS-Variablen, mit denen sich das Theme gestalten lässt.

## Fortgeschrittenes UI mit Flowbite Components

Kleine Component Demo unter [admin](/admin).

Für einfache Seiten mit Fokus auf Text reicht es MarkDown zu stylen. Für viele Dinge braucht man aber komplexere UI-Komponenten - etwa für Administrations-Oberflächen. Für digitale Formulare und andere datenintensive Anwendungen gibt es immer wieder ähnliche Anforderungen, die in Design-Systemen wie [Material-Design (google)][material], [Carbon (IBM)][carbon] oder [lightning (salesforce)][lightning] fertig ausgearbeitet sind. Nicht nur das grafische Design, sondern die ganze Handhabung von Maus bis touch, mobile-screen bis Stage-LED-Wand.

[**Flowbite**][flowbite] scheint mir dafür sehr gut geeignet, ist open-source, baut auf dem bewärten Tailwind-System auf und kann dadurch _alle_ gängigen Frontend-Frameworks unterstützen. Ich bin begeistert! 

[material]: https://m3.material.io/
[carbon]: https://carbondesignsystem.com/
[lightning]: https://www.lightningdesignsystem.com/
[flowbite]: https://flowbite.com/

## Bedachte Software-Quellen

Ich habe mich für diese Seite darüber hinaus dafür interessiert, ob es auch professionelle Lösung gibt abseits der typischen US-Tech-Giganten, um gegen problematische Abhängigkeiten / Entwicklungen resilient zu sein. Aber auch um selbst mein Bewusstsein dafür zu weiten, Europa als Software-Standort verstehen zu lernen.

- Flowbite ![eu][e-eu]![hu][e-hu] alternative to Material Design (google / alphabet)
- Svelte alternative to react (facebook / meta)

Weiter wäre es auch in diesem Sinne z.B. auf gitlab ![eu][e-eu]![nl][e-nl] zu hosten, statt auf github (microsoft)...

## Easter Eggs

Schau mal auf den Fax Link in der Kontak-Info. Die Emoji-Bibliothek dahinter wurde and der Hochschule für Gestaltung Schwäbisch Gmünd entwickelt.

[e-eu]: /emoji/eu.svg
[e-hu]: /emoji/hu.svg
[e-nl]: /emoji/nl.svg