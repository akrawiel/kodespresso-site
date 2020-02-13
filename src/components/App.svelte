<script>
  import Footer from "components/Footer.svelte";
  import Navigation from "components/Navigation.svelte";
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
    font-size: 8rem;
  }
</style>

{#if applicationVisible}
  <Navigation />
  <main class="flex items-center justify-start direction-column">
    <div>
      This blog is currently
      <b>WIP</b>
    </div>
    <div>
      <ion-icon name="build" />
    </div>
  </main>
  <Footer />
{/if}
