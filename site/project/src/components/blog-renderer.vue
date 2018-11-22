<template lang="pug">
.blog-container.container
  .blog-container__loader(v-if="currentEntry === null")
    i.fas.fa-circle-notch.blog-container__loader__icon
  component(:is="'blog-' + currentEntry" v-else)
</template>

<style lang="postcss" scoped>
.blog-container {
  @apply py-2 px-4 mx-auto min-h-container;
}

.blog-container__loader {
  @apply h-container w-full flex items-center justify-center;
}

@keyframes icon-rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.blog-container__loader__icon {
  animation-name: icon-rotate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  font-size: 10vh;
}
</style>

<script>
export default {
  data: () => ({
    currentEntry: null
  }),
  components: {
    Blog1: () => import("entries/blog-1")
  },
  mounted() {
    import("entries/newest").then(newest => {
      this.currentEntry = Number(newest);
    });
  }
};
</script>
