<template lang="pug">
blog-entry(:tags="tags")
  template(slot="title") Joys of ECMAScript 6: Destructuring
  template(slot="id") 2
  template(slot="tags" slot-scope="tagData")
    span {{ tagData.tag }}
  template(slot="time") 2018.11.30 01:11
  template(slot="content")
    p.
      First article in this <em>mini-series</em> will cover the subject of one of the new
      features available in ECMAScript 6 - <em>destructuring</em>. This new language trait
      allows you to easily <em>disassemble arrays and objects into named variables</em>.
      Let's take a closer look at an example of <em>array destructuring</em> and how it
      compares to previous version of ECMAScript.
    p
      small ECMAScript 6
    pre.
      // defining an example array
      const point = [ 3, 4 ]

      // array destructuring
      const [ x, y ] = point

      console.log(x, y) // outputs: 3 4
    p
      small ECMAScript 5
    pre.
      var point = [ 3, 4 ]

      var x = point[0]
      var y = point[1]

      console.log(x, y)
    p.
      As you can see <em>simple and concise syntax</em> allows writing of shorter code, thus
      decreasing the amount of your work.
    p.
      Syntax is somewhat similar with <em>object destructuring</em> as you will see in the
      example below.
    p
      small ECMAScript 6
    pre.
      // defining an example object
      const point = { x: 3, y: 4, z: 5 }

      // object destructuring with and without parameter shorthand
      const { x, y, z: depth } = point

      console.log(x, y, depth) // outputs 3 4 5
    p
      small ECMAScript 5
    pre.
      var point = { x: 3, y: 4, z: 5 }

      var x = point.x
      var y = point.y
      var depth = point.z

      console.log(x, y, depth)
    p.
      Even though object destructuring may require you to use the names of objects parameters,
      it <em>greatly shortens your code</em>. In this case you can also <em>omit any number of parameters</em>
      and only extract the data you need:
    pre.
      const { x, z: depth } = point
    p.
      Moreover, you can use <em>default values of parameters</em> in both types of destructuring:
    p
      small ECMAScript 6
    pre.
      // a is undefined in point variable
      const { x, z: depth, a = 10 } = point

      console.log(a) // outputs 10
    p
      small ECMAScript 5
    pre.
      var x = point.x
      var depth = point.z
      var a = point.a === undefined ? 10 : point.a

      console.log(a)
    p.
      The case I personally use destructuring the most are <em>destructured function arguments</em>.
      Using destructured objects or arrays as function arguments enables you to <em>directly
      access contents</em> of those arguments. And of course any destructuring rules mentioned
      above can be applied here too!
    p
      small ECMAScript 6
    pre.
      function reduceMultiply([a, b, c = 1]) {
        return a * b * c
      }
    p
      small ECMAScript 5
    pre.
      function reduceMultiply(arg) {
        var a = arg[0]
        var b = arg[1]
        var c = arg[2] === undefined ? 1 : arg[2]

        return a * b * c
      }
    p.
      I find this new feature of ECMAScript 6 extremely useful as it <em>tremendously reduces
      the amount of code</em> I have to write and lets me concentrate more on the programming
      itself. Even though features of ES6 are widely supported in many modern browsers, I still
      <em>recommend using a transpiler</em> such as <a href="https://babeljs.io/">Babel</a> to eliminate
      risk of not supporting older browsers such as IE. More of amazing ES6 features will be
      covered in future entries, but for now...
    p
      span Stay tuned and 
      strong grab your cups!
</template>

<script>
export default {
  data: () => ({
    tags: ["JavaScript", "ECMAScript 6", "Joys of ECMAScript 6"]
  }),
  components: {
    BlogEntry: () => import("components/blog-entry")
  }
};
</script>
