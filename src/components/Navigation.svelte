<script>
  import page from "page";
  import { onDestroy, onMount } from "svelte";

  // theme configuration
  const THEMES = {
    DARK: "DARK",
    LIGHT: "LIGHT"
  };

  let theme = sessionStorage.getItem("theme") || THEMES.DARK;

  const toggleTheme = () => {
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;

    sessionStorage.setItem("theme", newTheme);
    theme = newTheme;
  };

  const documentStyle = document.documentElement.style;

  $: {
    switch (theme) {
      case THEMES.DARK: {
        documentStyle.setProperty("--bg-light-color", "#3c2a1e");
        documentStyle.setProperty("--bg-dark-color", "#1a120d");
        documentStyle.setProperty("--fg-normal-color", "#e2d0c3");
        documentStyle.setProperty("--fg-highlight-color", "#a6aeec");
        break;
      }
      case THEMES.LIGHT: {
        documentStyle.setProperty("--bg-light-color", "#e2d0c3");
        documentStyle.setProperty("--bg-dark-color", "#c8a78e");
        documentStyle.setProperty("--fg-normal-color", "#503f35");
        documentStyle.setProperty("--fg-highlight-color", "#000");
        break;
      }
    }
  }

  // routing configuration
  onMount(() => {
    page("/", () => {
      console.log("main page");
    });
    page("/tags", () => {
      console.log("tags page");
    });
    page("/about", () => {
      console.log("about page");
    });
    page("*", () => {
      console.log("not found page");
    });

    page.start();
  });

  onDestroy(() => {
    page.stop();
  });
</script>

<style>
  header {
    padding: 0 1rem;
    width: 100%;
  }

  @media only screen and (min-width: 72rem) {
    header {
      max-width: 72rem;
    }
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
  }

  .link-container *:not(:last-child) {
    margin-right: 0.75rem;
  }

  .only-big-screen,
  .only-small-screen {
    display: flex;
  }

  @media only screen and (max-width: 36rem) {
    .only-big-screen {
      display: none;
    }
  }

  @media only screen and (min-width: 35.95rem) {
    .only-small-screen {
      display: none;
    }
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
  }

  ion-icon:hover {
    filter: brightness(1.5);
    transform: scale(1.1) rotate(5deg);
  }
</style>

<header>
  <nav>
    <div class="link-container">
      <a class="title" href="/">Kodespresso</a>
    </div>
    <div class="link-container only-big-screen">
      <ion-icon on:click={toggleTheme} name="contrast" />
      <a href="/tags">Tags</a>
      <a href="/about">About</a>
    </div>
    <div class="link-container only-small-screen">
      <ion-icon name="menu" />
    </div>
  </nav>
</header>
