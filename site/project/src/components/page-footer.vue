<template lang="pug">
footer.page-footer
  .footer__container
    .footer__copyright
      .footer-row
        span © Copyright 2018, Aleksander Krawiel
      .footer-row
        span Website is open source and available 
        a.footer__link(href="https://github.com/kodespresso/kodespresso.github.io") here
    .footer__contact
      .footer-icons
        a.footer__link(href="https://www.linkedin.com/in/aleksander-krawiel"): i.fab.fa-linkedin
        a.footer__link(href="https://github.com/kodespresso"): i.fab.fa-github-square
</template>

<style lang="postcss">
.page-footer {
  @apply bg-dark-coffee h-footer;
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

.footer-icons {
  @apply text-2xl py-1;
}

.footer-icons .fab {
  @apply mx-1;
}

.footer__link {
  @apply text-latte;
}

@media (width <= 568px) {
  .footer-row {
    @apply text-2xs;
  }
}
</style>

