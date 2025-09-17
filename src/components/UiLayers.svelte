<script>
  let isIso = $state(false);
</script>

<ui-root class:iso={isIso}>
  <ui-layer class="notifications">
    <div class="notification">new message* {isIso}</div>
  </ui-layer>

  <ui-layer class="page-frame">
    <div class="page">
      <!--lyric credits: Heaven Shall Burn - Black Tears -->
      This fluid on my cheek<br />
      It drains me, I get weak<br />
      My heart is cold and bleak<br />
      Black blood, black tears<br />
      Black tears, black tears<br />
      Black
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
      <div>CONTENT</div>
    </div>
  </ui-layer>

  <ui-layer class="actions">
    <div>
      <div>ACTIONS</div>
      <button>2</button>
      <button>2</button>
      <button>2</button>
    </div>
  </ui-layer>

  <ui-layer class="dialogs">
    <div class="dialog">
      PRESS
      <button onclick={() => (isIso = !isIso)}> toggle 3D </button>
    </div>
  </ui-layer>
</ui-root>

<style>
  button {
    padding: 0.2rem;
  }
  ui-root {
    --size: 222px;
    display: block;
    margin: 1em;
    width: var(--size);
    height: var(--size);
    position: relative;
    box-shadow: 0 0 0 1px inset;
    transform-style: preserve-3d;
    transition: transform 1s;
  }

  ui-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    transition: transform 1s;
  }

  ui-layer.notifications {
    z-index: 40;
    width: auto;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .notification {
    margin: 0.3em;
    padding: 0.3em;
    color: rebeccapurple;
    background: #eee;
    border: 2px solid;
  }

  ui-layer.page-frame {
    overflow: hidden;
  }

  .page {
    position: absolute;
    top: 1em;
    bottom: 3em;
    width: 100%;
    overflow: auto;
    padding: 1em;
  }

  ui-layer.actions {
    height: 3em;
    top: inherit;
    bottom: 0;
    background: rebeccapurple;
  }

  ui-layer.dialogs {
    background: rgba(0, 0, 0, 0.5);
  }
  .dialog {
    background: rebeccapurple;
    width: 90%;
    padding: 1em;
    border-radius: 0.2em;
  }

  ui-root.iso {
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateZ(-45deg);
  }
  .iso ui-layer {
    box-shadow:
      -2px 2px 1px cyan,
      0 0 1px 1px cyan inset;
  }

  .iso ui-layer:nth-child(1) {
    transform: translate3d(0, 0, calc(40px * 1));
  }
  .iso ui-layer:nth-child(2) {
    transform: translate3d(0, 0, calc(40px * 2));
  }
  .iso ui-layer:nth-child(3) {
    transform: translate3d(0, 0, calc(40px * 3));
  }
  .iso ui-layer:nth-child(4) {
    transform: translate3d(0, 0, calc(40px * 4));
  }
</style>
