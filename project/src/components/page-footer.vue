<template lang="pug">
footer.page-footer
  .footer__container
    .footer__copyright
      .footer-row
        span © Copyright 2018 - 2019, Aleksander Krawiel
      .footer-row
        span Website is open source and available 
        a.footer__link(href="https://github.com/kodespresso/kodespresso.github.io") here
    .footer__contact
      .footer__right
        .footer__text Contact me!
        .footer__icons
          a.footer__link(href="mailto:a.krawiel@gmail.com?subject=Kodespresso"): i.fas.fa-envelope-square
          a.footer__link(href="https://github.com/akrawiel"): i.fab.fa-github-square
</template>

<style lang="postcss">
.page-footer {
  @apply bg-darker-coffee h-footer;
}

.footer__container {
  @apply flex p-4 justify-between items-center h-full;
}

.footer__copyright {
  @apply flex flex-col;
}

.footer-row {
  @apply text-sm py-1;
}

.footer__right {
  @apply text-2xl py-1;
}

.footer__right .fab {
  @apply mx-1;
}

.footer__icons {
  @apply flex items-center justify-center my-1;
}

.footer__link {
  @apply text-latte;
}

.footer__text {
  @apply text-sm my-1;
}

@media (width <= 568px) {
  .footer-row {
    @apply text-2xs;
  }

  .footer__text {
    @apply hidden;
  }
}
</style>

