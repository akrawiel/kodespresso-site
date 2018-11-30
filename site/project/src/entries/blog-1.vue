<template lang="pug">
blog-entry(:tags="tags")
  template(slot="title") First-class function composition in JS and how it changed the way I code
  template(slot="id") 1
  template(slot="tags" slot-scope="tagData")
    span {{ tagData.tag }}
  template(slot="time") 2018.11.23 03:00
  template(slot="content")
    p.
      To start off this article we first need to define <em>function composition</em>,
      which is the process of <em>combining multiple functions into one stream</em>
      with outputs of one function transmitting to next one.
      A basic example (with subsequent function executions) will definitely shed more light on the definition.
    pre.
      // Let's define 4 functions and compose them together
      const roundDown = x => Math.floor(x)
      const convertToDollars = x => `${x}$`
      const addYouWonText = x => `You won ${x}!`
      const toUpperCase = x => x.toUpperCase()

      // And now for the composition
      const composedFunction = x => toUpperCase(addYouWonText(convertToDollars(roundDown(x))))

      // And now for some data
      composedFunction(1000.33) // result: "YOU WON 1000$!"
    p.
      As you can see we have created our first (and of course prettiest) function composition.
      However, if you look closely on the end of the line with our composition you will see something 
      what may be considered at least slightly disturbing:
    pre.
      ))))
    p.
      Ah yes, the almighty <em>4 parentheses of apocalypse</em>. The more functions you will try to add to composition,
      the more you will have to struggle with those. You may ask yourself "Is there a rescue for me?"
      and the answer is "Of course there is!". Here comes the <em>first-class function composition</em>.
    p.
      And what hides under this definition? First-class composition is combining <em>higher-order functions</em>
      (or functions accepting and/or returning other functions) together.
      This allows us to naturally create composition flow as we go through all consecutive functions.
      One of possible solutions is to use an <em>array of functions</em> to define the order of function execution.
      Let's have a look at an example higher-order function composer utilizing an array of functions.
    pre.
      const functionComposer = functions => {
        return initialValue => {
          // Our main iteration function
          const iterateFunction = (currentFunctionIndex, currentValue) => {
            if (typeof functions[currentFunctionIndex] !== "undefined") {
              // Recursing with a next array index and newly calculated value
              return iterateFunction(currentFunctionIndex + 1, functions[currentFunctionIndex](currentValue))
            } else {
              // Returning the value if no next function is found
              return currentValue
            }
          }

          // Initializing tail call recursion
          return iterateFunction(0, initialValue)
        }
      }
    p.
      With our newly created function composer our previously mentioned function composition would look like that:
    pre.
      const composedFunction = x => functionComposer([roundDown, convertToDollars, addYouWonText, toUpperCase])
    p.
      This function definition looks <em>much cleaner</em> and is <em>more readable</em> because you can now clearly
      see the function flow from left to right. And more readable code brings more maintainability and happiness
      for the future you or any other person reading your code. Isn't it lovely?
    p.
      Function array approach is also used in a popular utility library called <a href="https://lodash.com/">Lodash</a> with its "flow" function.
      Our composed function would look virtually identical:
    pre.
      const composedFunction = x => _.flow([roundDown, convertToDollars, addYouWonText, toUpperCase])
    p.
      There's also an alternative solution if you are using <a href="https://babeljs.io/">Babel</a> transpiler - the proposed <em>pipeline
      operator</em> (link <a href="https://babeljs.io/docs/en/next/babel-plugin-proposal-pipeline-operator.html">here</a>)
      inspired by functional languages such as F# or Haskell. It brings in a new operator <code>|></code> to take care
      of combining functions. Our composed function with this operator would look like that:
    pre.
      const composedFunction = x => x |> roundDown |> convertToDollars |> addYouWonText |> toUpperCase
    p.
      Operator lets us clearly see the stream of data flowing through subsequent functions, but for the time being
      pipeline operator is still in a very early stage of development. That does not mean you shouldn't try it out :).
    p.
      Function composition allowed me to write better and <em>more concise code without unwanted side-effects</em>, unneeded excess of parentheses
      or <em>illegible chained function executions</em>. There are many more amazing aspects of functional programming which I will
      surely cover in future entries. But for the time being...
    p
      span Stay tuned and 
      strong grab your cups!
</template>

<script>
export default {
  data: () => ({
    tags: ["Functional", "JavaScript"]
  }),
  components: {
    BlogEntry: () => import("components/blog-entry")
  }
};
</script>
