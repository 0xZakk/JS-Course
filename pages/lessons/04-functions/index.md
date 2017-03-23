---
index: 4
title: Functions
type: lesson
date: "2015-05-01T22:12:03.284Z"
layout: post
path: "/functions/"
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
learningObjectives: Understand what functions are and how, when and why to use them; Declare our first function; Understand parameters and arguments and how they relate to functions; Understand the basics of scope; Create and call a function that accepts parameters to solve a problem
---

# Functions

## Introduction to Functions ( 5 minutes )
Looking back, we've learnt the basics of working with data in javascript: numbers, booleans, strings; and, we've learnt how to store that data in variables where we can act on it, manipulating it's value. In the last class, we learnt about control flow, which is how wewrite code that reacts to our data. If a number is greater than 5 we'll done one thing, and if it's less than 5 we'll do another. So we've got our data and we can respond to it, now we need actions that affect that data in meaningful ways, triggingering new responses and creating more actions.

That's one thing that functions do for us.

A function is code that does something.

The other thing we need, that functions conveniently give us, is a way to encapsulate our code so that we can re use it. Functions take this idea of blocks that we learned about in loops and give those blocks something called scope, which almost make them like mini, subprograms within our program. Once we've declared our function and defined what action it will perform for us, we can invoke it over and over again, on different data and it'll perform the same action as many times as we need it to.

## Writing a function
There are a few parts to declaring and invoking functions - that is, writing them, defining what code we want to reuse or action we want to perform and then saying we want to run that code. We can declare a basic function just like this: 

```
function myFunction() {
  console.log( 'This is my first function' )
}
```

This overall syntax may be starting to look familiar. You can almost compare it to an `if` statement or a `for` loop. First we have our keyword, which in this case is `function`, then we're giving our function a name, opening a block and within it, writing the code we want to execute when our function is called.

That is the first part of working with functions: declaring them. The second part is invoking them, and it looks like this:

```
myFunction()
```

So we've gone through the two steps of writing and using a basic function.



- so now we've gone through the two steps of using functions: declaration and invocation

*Exercise 01 ( 10 minutes )*

```
function helloWorld() {
  console.log( 'Hello world' )
}
```


## Parameters ( 10 minutes )
*Here, we want to take our functions one step further by adding parameters*
- so we can now declare and invoke functions, but they're kind of limited in what they can do for us
- think about this add and subtract one example: if we're building a calculator, are we going to want to write one function for every possible action that we could take, adding 1, adding 2, adding 3, etc?
- so we can see the reusability in that we can encapsulate some code in a function and call it as many times as we want
- we need reusability in that our functions become actions that can be performed regardless of the values of our data, so become one level higher
- we call these `parameters`

```
function sayThanks( name ) {
  console.log( 'Thanks ' + name )
}

sayThanks( 'Obama' )
// => 'Thanks Obama'
```

*Refer to `functions.js`*

```
var number = 0;
function addOneToNumber() {
  number += 1
}

function addTwoToNumber() {
  number += 2
}
```

```
function addOne( number ) {
  return number + 1
}
```

*Exercise 02 ( 10 minutes )*


## Returning values ( 10 minutes )
*Point of this section is to understand returning a value from a function and the difference between ouput and side effects*
- one thing missing about using functions that we need
- what if we don't always want to `console.log` the product of our work?
- if we step back and think about if, our function is performing an action. We're giving our function some input in the form of parameters. How do we get our output back?
- Two ways: side effects and output

Side effects:
- we've already seen side effects, this is where running our function affects something by nature of the function running

```
var number = 0

function addNumber( adder ) {
  number += adder;
}

addNumber( 5 )
// => number = 5;
```

Output:
- We have not seen output - this is where we explicitly return the results of our function back after invoking it
- this completes the circle for us - or paints the whole picture: we have data, we perform an action on that data by calling a function, then we get a result back from the function that we can use

```
function addNumbers( num1, num2 ) {
  return num1 + num2
}

var number = addNumbers( 5, 10 )
console.log( number ) // => 15
```


## Function Scope  ( 15 minutes )
*Introduce the concept of scope, how it works and why it's useful*
- scope determines when and where variables are considered defined
- we've already seen one examples of scope when we talked about parameters


Scope Example 1
```
var a = 1

function addThree( x ) {
  return x + 3
}

addThree( a )
```
- do we think `x` exists outside of this function?

Scope Example 2:
```
function myFunction() {
  var a = 1
}

console.log( a ) // => error
```
- do we expect this `console.log` to work on `a`?
- variables declared within a function are only available within that function

Scope Example 3:
```
var a = 1

function myFunction() {
  console.log( a )
}
```
- do we expect this `console.log` to work on `a`?
- hierarchy of scopes
- global scope vs function scope

Scope Example 4:
```
var a = 1;
function firstFunction() {
  // do we expect this to work?
  console.log( a )

  var b = 2

  function internalFunction() {
    var c = 3

    // do we expect this to work?
    console.log( a )
    console.log( b )
    console.log( c )
  }

  // do we expect this to work?
  console.log( a )
  console.log( b )
  console.log( c )
}
// do we expect this to work?
console.log( a )
console.log( b )
console.log( c )

```


## Exercise 4 Solution

Part 1:
```
function createDeck( suits, ranks ) {
  // Check to make sure both parameters are arrays
  if (
    !(typeof suits === 'object') ||
    !(suits.length > 1) ||
    !(typeof ranks === 'object') ||
    !(ranks.length > 1)
  ) {
    return console.log('broken')
  }

  var finalArray = []

  for (var i = 0; i < suits.length; i++) {

    for (var j = 0; j < ranks.length; j++) {
      finalArray.push( ranks[ j ] + ' of ' + suits[ i ] )
    }

  }

  return finalArray;
}

var deckOfCards = createDeck( suits, ranks )
```

Part 2:
```
function getRandomCard() {
  // random number between 0 and 51
  var randomIndex = Math.floor( Math.random() * 51 )

  // get card at index of the random number we created above
  return deckOfCards[ randomIndex ]
}

myRandomCard = getRandomCard()
```

Part 3:
```
function dealHand( num ) {
  numOfCards = num || 1
  var handOfCards

  if ( numOfCards === 1 ) {

    handOfCards = getRandomCard()

  } else {

    handOfCards = []

    for (var i = 0; i < numOfCards; i++) {
      handOfCards.push( getRandomCard() )
    }

  }

  return handOfCards;
}
```

Part 4:
```
var playerOneCards = dealHand( 7 )
var playerTwoCards = dealHand( 7 )
```

Part 5:
```
function showHand( cardsArray ) {
  if ( !cardsArray ) return console.log( 'no hand passed in as param' )

  var showOfHand = 'This player has the following cards: '

  for (var i = 0; i < cardsArray.length; i++) {
    showOfHand += ' ' + cardsArray[i] + ','
  }

  console.log( showOfHand )
}

showHand()
showHand( playerOneCards )
```
