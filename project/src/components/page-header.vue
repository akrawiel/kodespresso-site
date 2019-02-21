<template lang="pug">
.page-header-container
  img.coffee-icon(:src="coffee" alt="A coffee cup")
  h1.title Kodespresso
  .text-container
    p.text-upper Brewing code
    p.text-lower with passion
</template>

<style lang="postcss" scoped>
.page-header-container {
  @apply flex items-center justify-center h-header px-4 py-2;
}

.title {
  @apply font-title flex-1 text-left pl-4;
  font-size: 3.5vh;
}

.coffee-icon {
  height: 100%;
}

.text-container {
  @apply pl-2;
}

.text-upper,
.text-lower {
  @apply text-right;
  font-size: 1.6vh;
}

img {
}
</style>

<script>
export default {
  data: () => ({
    coffee: require("static/coffee.svg")
  })
};
</script>
