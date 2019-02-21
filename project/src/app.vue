<template lang="pug">
.app-container
  page-header
  blog-renderer
  page-footer
</template>


<script>
export default {
  components: {
    PageHeader: () => import("./components/page-header.vue"),
    BlogRenderer: () => import("./components/blog-renderer.vue"),
    PageFooter: () => import("./components/page-footer.vue")
  },

  data() {
    return {};
  }
};
</script>
