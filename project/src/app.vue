<template lang="pug">
.app-container
  h1 Kodespresso
  img(:src="coffee" alt="A coffee cup")
  p Blog brewing soon...
</template>

<style lang="postcss" scoped>
.app-container {
  @apply flex flex-col items-center justify-center h-screen;

  * {
    @apply p-4;
  }
}

h1 {
  @apply font-title;
}

img {
  @apply h-48;
}
</style>

<script>
export default {
  data() {
    return {
      coffee: require("../static/coffee.svg")
    };
  }
};
</script>
