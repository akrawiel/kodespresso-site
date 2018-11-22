<template lang="pug">
.blog-entry__panel
  .blog-entry__title
    slot(name="title")
  .blog-entry__bottom-row
    .blog-entry__tags
      .blog-entry__tag(v-for="tag in tags")
        slot(name="tags" :tag="tag")
    .blog-entry__time
      i.fas.fa-clock.blog-entry__clock
      slot(name="time")
  .blog-entry__divider
  .blog-entry__content
    slot(name="content")
</template>

<style lang="postcss" scoped>
.blog-entry__panel {
  @apply bg-dark-coffee rounded-lg py-4 px-4;
}

.blog-entry__title {
  @apply font-title text-2xl;
}

.blog-entry__bottom-row {
  @apply flex my-2 justify-between;
}

.blog-entry__tags {
  @apply flex;
}

.blog-entry__tag {
  @apply bg-latte text-darker-coffee rounded p-1 mr-1 text-xs;
}

.blog-entry__content a {
  @apply text-latte;
}

.blog-entry__content p {
  font-size: 0.9rem;
  line-height: 1.5;
  text-align: justify;
  text-indent: 1.5rem;
}

@media (width <= 568px) {
  .blog-entry__bottom-row {
    @apply flex-col;
  }

  .blog-entry__tags {
    @apply my-2;
  }
}

.blog-entry__clock {
  @apply mr-1;
}

.blog-entry__divider {
  @apply mx-2 my-2 h-px bg-latte;
}
</style>

<script>
export default {
  props: {
    tags: Array
  }
};
</script>


