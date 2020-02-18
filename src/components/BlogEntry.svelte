<script>
  import DomPurify from "dompurify";
  import dayjs from "dayjs";
  import localizedFormat from "dayjs/plugin/localizedFormat";
  import fm from "front-matter";
  import marked from "marked";
  import hljs from "highlight.js";
  import { onMount } from "svelte";

  let entry, entryBody, formattedDate;

  onMount(async () => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code, language) {
        const validLanguage = hljs.getLanguage(language)
          ? language
          : "plaintext";
        return hljs.highlight(validLanguage, code).value;
      },
      pedantic: false,
      gfm: true,
      breaks: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });

    const rawEntry = await fetch("/entries/1-hello-world.md").then(response =>
      response.text()
    );

    entry = fm(rawEntry);

    entryBody = DomPurify.sanitize(marked(entry.body));

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

  .footer-note {
    align-items: center;
    display: flex;
  }

  .footer-note > *:not(:last-child) {
    margin-right: 0.5rem;
  }

  .footer-note > ion-icon {
    font-size: 1.25rem;
  }
</style>

{#if entry}
  <div class="entry-container">
    <h1>{entry.attributes.title}</h1>
    <div>{formattedDate}</div>
    <hr />
    {@html entryBody}
    <em class="footer-note">
      <span>Grab your cups & stay tuned for more koding shenanigans!</span>
      <ion-icon name="cafe-sharp" />
    </em>
  </div>
{/if}
