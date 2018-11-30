<template lang="pug">
.blog-container.container
  .blog-container__content(v-if="currentEntry !== null")
    .blog-container__navigation
      button.blog-container__button--previous(:disabled="currentEntry <= 0" @click="changeCurrentEntry(-1)") « Previous entry
      button.blog-container__button--next(:disabled="currentEntry >= newest" @click="changeCurrentEntry(1)") Next entry »
    keep-alive
      component(:is="'Blog' + currentEntry")
</template>

<style lang="postcss" scoped>
.blog-container {
  @apply px-4 mx-auto min-h-container;
}

.blog-container__navigation {
  @apply flex justify-between py-4;
}

.blog-container__button--previous,
.blog-container__button--next {
  @apply bg-latte text-dark-coffee text-xs py-1 px-2 rounded mb-4;
}

.blog-container__button--previous:disabled,
.blog-container__button--next:disabled {
  @apply opacity-50;
}
</style>

<script>
import BlogLoader from "components/blog-loader";

const otherOptions = {
  loading: BlogLoader,
  delay: 0
};

export default {
  data: () => ({
    currentEntry: null,
    newest: null
  }),
  components: {
    Blog0: () => ({
      component: import("entries/blog-0"),
      ...otherOptions
    }),
    Blog1: () => ({
      component: import("entries/blog-1"),
      ...otherOptions
    }),
    Blog2: () => ({
      component: import("entries/blog-2"),
      ...otherOptions
    })
  },
  mounted() {
    const pathNewest = parseInt(location.hash.replace(/^#\/blog\//, ""));

    import("entries/newest").then(newest => {
      this.newest = Number(newest);

      if (isNaN(pathNewest)) {
        this.currentEntry = Number(newest);
        history.replaceState({}, "newest", `/#/blog/${newest}`);
      } else {
        this.currentEntry = pathNewest;
      }
    });
  },
  methods: {
    changeCurrentEntry(dir) {
      const newCurrentEntry = Math.min(
        Math.max(this.currentEntry + dir, 0),
        this.newest
      );

      history.replaceState({}, "newest", `/#/blog/${newCurrentEntry}`);

      this.currentEntry = newCurrentEntry;
    }
  }
};
</script>
