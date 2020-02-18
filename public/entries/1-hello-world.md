---
title: Hello world?
date: 2020-02-18T03:39+01:00
tags:
  - Javascript
---

Welcome to _Kodespresso_ - a blog about programming and programming-related things (mostly :D).

Let's get this started with an easy `Hello world` program, but with a slight twist (_modern JS twist_, of course). Most of you have written code like this in their lives:

```js
console.log("Hello world")
```

You can just boot up the console straight from your browser and type that in to see your beloved and desired message.

Now you may ask yourself:

<blockquote>Where's this <em>modern JS</em> you were talking about?</blockquote>

Don't worry, it's coming. And it's coming up _right now_!

```js
"Hello world" |> console.log
```

By just looking on it you probably know what that code is doing, don't you? This is where the fun begins. How about this piece of code?

```js
const helloPromise = message => Promise.resolve(message)

'Hello world'
  |> helloPromise
  |> await
  |> console.log
```

This also prints the `Hello world` message to the console, but only after resolving the `Promise` object first.

The _pipeline operator_ shown in here (`|>`) changes the nested method invocation into sequence of methods, which increases the code's readability by _a lot_.

However, the aforementioned operator is (as of Feb 2020) currently in `Stage 1` of TC39 Proposal (which is Draft stage) - that means that there's still a long way for it to be introduced in the language itself (sadly, no browser <a href="https://caniuse.com/#search=pipeline%20operator" target="_blank">currently supports it</a>... but there's a <a href="https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator" target="_blank">Babel plugin!</a>). Also, there are 2 competing proposals for this operator - the `F#` proposal (shown above) & also the `Smart` proposal, which replaces the previously shown code with this:

```js
'Hello world'
  |> helloPromise
  |> await #
  |> console.log
```

The `Smart` proposal introduces `#` symbol as a reference to the currently piped value. We could also use that to invoke any methods of the provided object like this:

```js
const numbersArray = [1, 2, 3, 4, 5]

const evenNumbersArray = numbersArray
  |> #.filter(number => number % 2 === 0) // [2, 4]
```

That's quite an easy example and you should use the `Array.prototype.filter` directly, but it perfectly showcases the used `#` reference.

In order to recreate the same invocation using the `F#` proposal we could just introduce an _arrow function_:

```js
const evenNumbersArray = numbersArray
  |> (array => array.filter(number => number % 2 === 0))
```

Note that the arrow function itself has to be placed inside of brackets in order to function properly or we could just make it a variable. Functional JS toolbelt libraries like _Ramda_ (which also leverages automatic function _currying_) can be used to avoid the process of creating such methods:

```js
import { filter, join, replace } from 'ramda'

['Hello', 'dear', 'banana']
  |> filter(word => word !== 'dear') // ['Hello', 'banana']
  |> join(' ')                       // 'Hello banana'
  |> replace('banana', 'world')      // 'Hello world'
  |> console.log
```

We could also use the Ramda's `pipe` method, but using the pipeline operator seems to produce much cleaner and readable code - for instance the `pipe` method requires the input argument to be provided after the piped flow, which tends to greatly disrupt the created sequence flow:

```js
import { filter, join, pipe, replace } from 'ramda'

pipe(
  filter(word => word !== 'dear'), // ['Hello', 'banana']
  join(' '),                       // 'Hello banana'
  replace('banana', 'world'),      // 'Hello world'
  console.log
)(['Hello', 'dear', 'banana'])
```

If you're interested in more detailed explanation of those proposals check <a href="https://github.com/tc39/proposal-pipeline-operator" target="_blank">this</a> website.
