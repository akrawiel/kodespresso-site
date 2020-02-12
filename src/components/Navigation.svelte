<script>
  import NavigationMenu from "components/NavigationMenu.svelte";
  import { setupRouting, removeRouting } from "utilities/routing.js";
  import { switchTheme, THEMES } from "utilities/themes.js";
  import { onDestroy, onMount } from "svelte";

  // theme configuration
  let theme = sessionStorage.getItem("theme") || THEMES.DARK;

  const toggleTheme = () => {
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;

    sessionStorage.setItem("theme", newTheme);
    theme = newTheme;
  };

  $: {
    switchTheme(theme);
  }

  // routing configuration
  onMount(() => {
    setupRouting();
  });

  onDestroy(() => {
    removeRouting();
  });

  // menu
  let menuOpen = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };
</script>

<style>
  header {
    padding: 0 1rem;
    width: 100%;
  }

  nav {
    align-items: center;
    display: flex;
    height: 5rem;
    justify-content: space-between;
  }

  .link-container {
    align-items: center;
    display: flex;
    position: relative;
  }

  .link-container *:not(:last-child) {
    margin-right: 0.75rem;
  }

  a,
  a:visited {
    color: var(--fg-normal-color);
    filter: brightness(1);
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    filter: brightness(1.5);
  }

  a.title {
    font-family: "Caveat", cursive;
    font-size: 3rem;
  }

  ion-icon {
    font-size: 1.5rem;
    color: var(--fg-normal-color);
    cursor: pointer;
    filter: brightness(1);
    transform: scale(1) rotate(0deg);
    transition: all 0.2s ease-out,
      transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 1;
  }

  ion-icon:hover {
    filter: brightness(1.25);
    transform: scale(1.1) rotate(5deg);
  }

  ion-icon:active {
    filter: brightness(1.5);
    transform: scale(1.2) rotate(10deg);
  }

  ion-icon.menuOpen {
    color: var(--bg-light-color);
  }
</style>

<header>
  <nav>
    <div class="link-container">
      <a class="title" href="/">Kodespresso</a>
    </div>
    <div class="link-container">
      <NavigationMenu {menuOpen} {toggleMenu} {toggleTheme} />
      <ion-icon name="menu" class:menuOpen on:click={toggleMenu} />
    </div>
  </nav>
</header>
