<template lang="pug">
blog-entry(:tags="tags")
  template(slot="title") Hello world!
  template(slot="tags" slot-scope="tagData")
    span {{ tagData.tag }}
  template(slot="content")
    p
      span Welcome to 
      em Kodespresso 
      span - a programming blog created with programming passion and fueled by many cups of coffee!
    p
      span This is my first blog entry here and more will definitely come soon. Up until now I was creating a basic template for my blog using 
      a(href="https://vuejs.org/") Vue
      span  and (for the first time) 
      a(href="https://parceljs.org/") Parcel
      span .
    p
      span Throughout following days I will write an entry about a marvelous functional programming mechanism (function composition) and how it changed the way I code.
    p
      span Stay tuned and 
      strong grab your cups!
  template(slot="time") 2018.11.22 01:10
</template>

<script>
export default {
  data: () => ({
    tags: ["Announcement"]
  }),
  components: {
    BlogEntry: () => import("components/blog-entry")
  }
};
</script>
