<script>
  import Footer from "components/Footer.svelte";
  import Navigation from "components/Navigation.svelte";
  import BlogEntry from "components/BlogEntry.svelte";
  import { onMount } from "svelte";

  let applicationVisible = false;

  onMount(() => {
    if (!applicationVisible) {
      applicationVisible = true;
    }
  });
</script>

<style>
  main {
    flex-grow: 1;
    padding: 1rem;
    width: 100%;
  }

  ion-icon {
    color: var(--fg-normal-color);
    font-size: 1.5rem;
  }
</style>

{#if applicationVisible}
  <Navigation />
  <main class="flex items-center justify-start direction-column">
    <div class="flex items-center">
      <span>This blog is currently&nbsp;</span>
      <b>WIP&nbsp;</b>
      <ion-icon name="build" />
    </div>
    <div class="spacer-1" />
    <BlogEntry />
  </main>
  <Footer />
{/if}
