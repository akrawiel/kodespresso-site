<template functional lang="pug">
.blog-container__loader
  i.fas.fa-circle-notch.blog-container__loader__icon
</template>

<style lang="postcss" scoped>
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