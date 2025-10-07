<script>
  let isOpen = $state(false);

  const lyrics = [
    {
      text: "Alles ist schwer bevor es einfach ist.\nAlles scheitert bis es klappt",
      cite: "Onkelz - Flügel für dich (2020)",
      url: "https://www.musixmatch.com/lyrics/B%C3%B6hse-Onkelz/Fl%C3%BCgel-f%C3%BCr-Dich",
    },
    {
      text: "Ganz egal ob ich Blut schwitz, bittere Tränen wein\nAlles erträglich, es muss nur immer Musik da sein",
      cite: "Broilers - 33 rpm (2011)",
      url: "https://www.musixmatch.com/lyrics/Broilers/33-rpm",
    },
    {
      text: "Why should I go where everyone goes?\nWhy should I do what everyone does?",
      cite: "Hosen - Pushed again (1998)",
      url: "https://genius.com/Die-toten-hosen-pushed-again-lyrics",
    },
    {
      text: "Some thrive on hate\nSome love and dream\nEveryone′s got a purpose\nAnd wants to be loved",
      cite: "pApA roAch - lovehatetragedy (2002)",
      url: "https://www.musixmatch.com/lyrics/Papa-Roach/Lovehatetragedy",
    },
    {
      text: "Ich sehe blinden Haß, blinde Wut\nFeige Morde, Kinderblut\nIch sehe braune Scheiße töten\nIch sehe Dich",
      cite: "Onkelz - Deutschland im Herbst (1993)",
      url: "https://www.musixmatch.com/lyrics/B%C3%B6hse-Onkelz/Deutschland-im-Herbst",
    },
    {
      text: "Come let′s get away\nNo one knows you like I do\nWe will pass it if\nYou let the tires kiss the ground",
      cite: "Guano Apes - Break the line (2004)",
      url: "https://www.musixmatch.com/lyrics/Guano-Apes/break-the-line",
    },
  ];

  const getRandomIndex = () => Math.floor(Math.random() * lyrics.length);

  let selected = $state(getRandomIndex());
  let lyric = $derived(lyrics[selected]);

  const handleOpen = () => {
    selected = getRandomIndex();
    isOpen = true;
  };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="lyrics">
  <button
    class="b-bg outline"
    aria-label="button-close"
    onclick={() => (isOpen = false)}
    tabindex="-1"
  ></button>
  <div class={["card", { "is-open": isOpen }]}>
    <button
      class={["backside", { "pointer-blocker": isOpen }]}
      onclick={handleOpen}
    ></button>
    <blockquote>
      <div class="overflow-box">
        {lyric.text}
      </div>
      <cite>– <a href={lyric.url}>{lyric.cite}</a></cite>
    </blockquote>
    <hr />
    <button
      class="b-close outline"
      onclick={() => (isOpen = false)}
    >
      X
    </button>

    <small>
      {selected + 1} / {lyrics.length}
    </small>
  </div>

  <button
    class="b-open"
    onclick={handleOpen}
  >
    <img
      src="/emoji/270D.svg"
      alt="pick a lyrics card"
    />
  </button>
</div>

<style>
  .lyrics {
    display: grid;
    place-items: center;
    grid-template-rows: 1fr auto;
    perspective: 20cm;
    transform-style: preserve-3d;
    isolation: isolate;
  }
  .b-open,
  .b-close {
    border-radius: 50%;
    height: 3em;
    aspect-ratio: 1;
  }
  .card {
    --r: 15px;
    --col-1: var(--pico-blockquote-border-color);
    grid-row: 1 / -1;
    grid-column: 1 / 2;
    display: grid;
    grid-template-rows: 4fr 1px 1fr;
    justify-items: center;
    place-items: center;
    background: var(--pico-blockquote-border-color);
    width: 28ch;
    aspect-ratio: 2.5 / 3.5;
    border-radius: var(--r);
    box-shadow:
      0 0 0 3px currentColor inset,
      0 0 0 8px var(--col-1) inset,
      0 0 0 10px currentColor inset;
    padding: 12px;
    transform: rotateX(-120deg) rotateZ(90deg) scale(0.77);
    transition: transform 0.4s;
    transform-style: inherit;
    z-index: 1;
  }
  .card.is-open {
    transform: rotateX(0) rotateZ(0) scale(1);
  }
  .backside {
    background-image: url(/card\ back.jpg);
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: var(--r);
    transform: translateZ(-1px) scaleX(-1);
  }
  .pointer-blocker {
    pointer-events: none;
  }
  blockquote {
    grid-row: 1 / 2;
    border: none;
    margin: 0;
    white-space: preserve;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    height: 100%;
    overflow: hidden;
  }
  .overflow-box {
    overflow: auto;
    flex: 0 1 auto;
  }
  hr {
    border-top: 1px solid currentColor;
    margin: 0;
    width: 75%;
  }
  small {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
  .b-open {
    grid-row: 2 / -1;
    grid-column: 1 / 2;
    margin: 1rem;
  }
  img {
    transform: scale(2);
    filter: grayscale(1);
  }
  .b-bg {
    grid-row: 1 / -1;
    grid-column: 1 / -1;
    width: 100%;
    height: 100%;
    outline: none;
    box-shadow: none;
    border-color: var(--pico-primary);
  }
</style>
