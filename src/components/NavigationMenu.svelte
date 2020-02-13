<script>
  export let menuOpen, toggleMenu, toggleTheme;
</script>

<style>
  :root {
    --menu-width: 20rem;
  }

  .menu-container {
    background-color: var(--bg-dark-color);
    border-radius: 50%;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    color: var(--fg-normal-color);
    height: calc(1 * var(--menu-width));
    right: calc(-1 * var(--menu-width));
    position: fixed;
    top: calc(-1 * var(--menu-width));
    width: calc(1 * var(--menu-width));
    z-index: 1;
  }

  .menu-container.menuOpen {
    right: calc(-0.5 * var(--menu-width));
    top: calc(-0.5 * var(--menu-width) + 0.5rem);
  }

  .menu-container > * {
    align-items: center;
    color: var(--bg-normal-color);
    cursor: pointer;
    display: flex;
    filter: brightness(1);
    font-size: 0.875rem;
    font-weight: bold;
    left: 0;
    position: absolute;
    text-decoration: none;
    top: 0;
    transform-origin: center left;
  }

  .menu-container > *:hover {
    filter: brightness(1.25);
  }

  .menu-container > * > *:not(:last-child) {
    margin-right: 0.5rem;
  }

  .menu-container > :nth-child(1) {
    transform: translate(
        calc(0.5 * var(--menu-width)),
        calc(0.5 * var(--menu-width))
      )
      rotate(-10deg) translateX(calc(-0.5 * var(--menu-width) + 1.25rem));
  }

  .menu-container > :nth-child(2) {
    transform: translate(
        calc(0.5 * var(--menu-width)),
        calc(0.5 * var(--menu-width))
      )
      rotate(-30deg) translateX(calc(-0.5 * var(--menu-width) + 1.25rem));
  }

  .menu-container > :nth-child(3) {
    transform: translate(
        calc(0.5 * var(--menu-width)),
        calc(0.5 * var(--menu-width))
      )
      rotate(-50deg) translateX(calc(-0.5 * var(--menu-width) + 1.25rem));
  }

  .menu-container > :nth-child(4) {
    transform: translate(
        calc(0.5 * var(--menu-width)),
        calc(0.5 * var(--menu-width))
      )
      rotate(-70deg) translateX(calc(-0.5 * var(--menu-width) + 1.25rem));
  }

  ion-icon {
    font-size: 1.5rem;
    color: var(--bg-normal-color);
    cursor: pointer;
    filter: brightness(1);
  }
</style>

<div class="menu-container" class:menuOpen on:click={toggleMenu}>
  <a href="/">
    <ion-icon name="newspaper" />
    <div>Blog</div>
  </a>
  <a href="/blog">
    <ion-icon name="pricetags" />
    <div>Tags</div>
  </a>
  <a href="/about">
    <ion-icon name="help" />
    <div>About</div>
  </a>
  <div on:click={toggleTheme}>
    <ion-icon name="contrast" />
    <div>Theme</div>
  </div>
</div>
