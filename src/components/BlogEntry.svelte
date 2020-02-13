<script>
  import entry from "pages/1.md";
  import DomPurify from "dompurify";
  import dayjs from "dayjs";
  import localizedFormat from "dayjs/plugin/localizedFormat";
  import { onMount } from "svelte";

  let formattedDate;

  onMount(() => {
    dayjs.extend(localizedFormat);

    formattedDate = dayjs(entry.attributes.date).format("lll");
  });
</script>

<style>
  .entry-container {
    background-color: var(--bg-dark-color);
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.25);
    max-width: 48em;
    padding: 1rem;
    width: 100%;
  }
</style>

<div class="entry-container">
  {#if entry}
    <h1>{entry.attributes.title}</h1>
    <div>{formattedDate}</div>
    <hr />
    {@html DomPurify.sanitize(entry.html)}
  {/if}
</div>
