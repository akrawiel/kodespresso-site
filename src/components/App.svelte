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

  @media only screen and (min-width: 72rem) {
    main {
      max-width: 72rem;
    }
  }
</style>

{#if applicationVisible}
  <Navigation />
  <main>
    <p>
      Now it's powered by
      <em>Svelte</em>
    </p>
  </main>
  <Footer />
{/if}
