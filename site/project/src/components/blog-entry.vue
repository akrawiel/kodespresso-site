<template lang="pug">
.blog-entry__panel
  .blog-entry__title
    slot(name="title")
    span  (#
    slot(name="id")
    span )
  .blog-entry__bottom-row
    .blog-entry__tags
      i.fas.fa-tag.blog-entry__icon.-left
      .blog-entry__tag(v-for="tag in tags")
        slot(name="tags" :tag="tag")
    .blog-entry__time
      i.fas.fa-clock.blog-entry__icon.-right
      span
        slot(name="time")
  .blog-entry__divider
  .blog-entry__content
    slot(name="content")
</template>

<style lang="postcss" scoped>
.blog-entry__panel {
  @apply bg-dark-coffee rounded-lg py-8 px-8 mb-4;
}

.blog-entry__title {
  @apply font-title text-2xl;
}

.blog-entry__bottom-row {
  @apply flex my-2 justify-between;
}

.blog-entry__tags {
  @apply flex flex-wrap items-center;
}

.blog-entry__time {
  @apply mt-1;
}

.blog-entry__tag {
  @apply bg-latte text-darker-coffee rounded p-1 mr-1 mt-1 text-xs;

  & span {
    white-space: nowrap;
  }
}

.blog-entry__content a {
  @apply text-latte;
}

.blog-entry__content p {
  @apply mb-4;
  font-size: 0.9rem;
  line-height: 1.5;
  text-align: justify;
  text-indent: 1.5rem;

  & small {
    font-size: 0.7rem;
  }
}

.blog-entry__content pre {
  @apply font-mono bg-darker-coffee p-4 rounded-lg mb-4;
  font-size: 0.8rem;
  overflow-x: auto;
}

.blog-entry__content code {
  @apply font-mono bg-darker-coffee p-1 rounded-lg;
  font-size: 0.9rem;
}

.blog-entry__content em {
  @apply text-emphasis font-bold italic;
}

@media (width <= 568px) {
  .blog-entry__bottom-row {
    @apply flex-col;
  }

  .blog-entry__tags {
    @apply my-2;
  }
}

.blog-entry__icon {
  @apply mr-2;
}

.blog-entry__icon.-left {
  @apply mt-1;
}

.blog-entry__divider {
  @apply mx-2 my-4 h-px bg-latte;
}
</style>

<script>
export default {
  props: {
    tags: Array
  }
};
</script>


