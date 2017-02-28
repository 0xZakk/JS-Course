---
index: 2
title: Data Types
type: lesson
date: "2015-05-01T22:12:03.284Z"
layout: post
path: "/data-types/"
description: Data types are the most atomic unit of any program. Javascript has many basic data types, which we cover in this lesson, and a couple of complex data types. We'll be introduced to Arrays at the end of the class as our first complex data type.
learningObjectives: Describe the concept of a "data type" and how it relates to variables; Declare, assign to, and manipulate data stored in a variable; Create arrays and access values in them
---

# Data Types
		We spent the last two classes downloading and learning a set of tools that we need in order to be successful in this class. We spent almost an entire class on Git so that we can manage and submit our homework and work on our upcoming projects. Even today you'll see how tightly Git is integrated into what we're doing.
		Now that we've been introduced to these tools - Git and the command line - we're ready to go; we're ready to learn how to write programs using javascript. And we're going to start with the most atomic unit of any program - the data passing through it. In each of the next four classes, we'll become acquainted with one of the atomic units of programming with javascript - data types, control flow, functions and objects - and each class will build on the ones before it. By the end of this section of the course we'll have been introduced to every aspect of the language that we need in order to start building applications and writing programs.
		To draw an analogy, in your Language Arts or English classes in High School and maybe College, you learned about subjects, verbs, punctuation, sentence structure, paragraph structure. Since javascript is a language, it's helpful to think about what we're learning over the next few weeks as synonymous in a lot of ways: instead of sentences and paragraphs, we have expressions and statements; instead of subjects and verbs we have values and operators. 

## Introduction to Data Types
		At the most generalized level, when we're discussing programming, all we're doing is moving and manipulating data.

### What is a "Data Type"
		Data *types* are simply the kinds of data that we can work with within our programs. That's a nuanced way of saying that we can use numbers, strings, booleans, etc. We have two ways of classifying these data types: simple and complex. Today we'll be talking about all 3 simple data types and 1 complex data type. The simple data types that we're about to go in to are: 
		
		1. Numbers
		2. Strings
		3. Booleans
			
		We'll get in to our first Complex data type: Arrays
		
		For each data type we cover, we'll answer these two questions: What values constitute this data type? What operations can I perform on or with data of this type?

## Numbers
		For our first data type, these questions are maybe a little contrived: what values do we think constitute the number data type? Well, numbers do. And what can we do with numbers? Math. 

### Numeric Values
		Numbers are *numeric values* stored in computer memory. There is a limit to how large your numbers can be - but it's really big, so you shouldn't worry about it. If you're coming from another programming language you may be curious as to whether or not javascript makes a distinction between integers and floats. The answer is: javascript does not. An integer is a whole number, like `1` or `10` or `-100`. A float is a fractional number, like `1.2`, `3.14`, or `0.25`. When it comes to numbers in javascript - that pretty much sums up everything.
		There are a lot of use cases for numeric data when building applications - as you might expect. The number of people currently on the bus, the current score in a game, the x and y coordinates of an element on the page as we animate from one position to another. And as you might guess, the value for us as application developers is in what we can do with numbers. 

### Operators
		Actions that we can perform on data come in two forms - functions or operators. For numbers, we have one of each: Arithmetic operators and the `Math` object. 

#### Arithmatic operators

Addition:
```
console.log( 'Addition:' )
console.log( 1 + 1 ) // => 2
```

Subtraction:
```
console.log( 'Subtraction:' )
console.log( 2 - 5 ) // => -3
```

Division:
```
console.log( 'Division:' )
console.log( 5 / 1 ) // => 2.5
```

Multiplication:
```
console.log( 'Multiplication:' )
console.log( 6 * 2 ) // => 12
```

Modulo/Remainder:
```
console.log( 'Modulo:' )
console.log( 10 % 2 ) // => 0
console.log( 5 % 2 ) // => 1
```

#### Special Number Operators
`Math` object

Absolute value
```   
console.log( 'Absolute value:' )
console.log( Math.abs( 12.234 ) )
console.log( Math.abs( 0.1 + 0.2 ) )
```

Power
```
console.log( 'Power:' )
console.log( Math.pow( 3, 2 ) ) // => 9
```

Square root
```
console.log( 'Square root:' )
console.log( Math.sqrt( 4 ) ) // => 2
```

Random Number
```
console.log( 'Random Number:' )
console.log( Math.random() ) // => 0.229375290430
```

*How might I get a random number between 0 and 10*
```
Math.floor( Math.random() * ( max - min + 1 ) + min );
```

## Strings
- What values constitute Strings?
- What operations can we perform on Strings?

### String Values
- strings are made up of characters and stored within single or double quotes
  - can be either single or double quotes - important that the outermost quotes are the same and any inner quotes are the opposite
- We use string values a lot to represent text data - names, addresses, anything!

```
'hello world'
"hello world"
"hello 'world', hello"
```

### String Operations
1. Concatenation - adding two strings together
2. String methods

#### Concatenation
```
'hello ' + 'world'
'I have ' + 20 + ' dogs!'
```

#### String Methods
```
'hello'.toUpperCase()
'HeLLo'.toLowerCase()
```

## Booleans
- What values constitute Booleans?
  - something is either `true` or `false`
  - Sort of it
  - where this gets interesting is in what we use Booleans for - which is a lot
- What operations can we perform on Booleans?
  - Logical Operators - set of operators based on whether something is true or false
  - `and`, `or` and `not`
  - we care about what this evaluates to
  - evaluated values - any expression can evaluate to true or false

### Value
- only `true` and `false`

### Operations
- Logical operators
- Evaluated expressions

#### Logical Operators
Logical And ( && )
```
console.log( true && true ) // => true
console.log( true && false ) // => false
console.log( false && false ) // => false
```

Logical Or ( || )
```
console.log( true || true ) // => true
console.log( true || false ) // => true
console.log( false || false ) // => false
```

Logical Not ( ! )
```
console.log( !true ) // => false
console.log( !false ) // => true
```

#### Evaluated Expressions
Comparison operators
`==`, `===`, `>`, `<`, `>=`, `<=
`
True
```
console.log ( 1 == 1 ) // => true
```

False
```
console.log( 4 < 2 ) // => false
```

Combining them
```
console.log( !( 4 < 2) ) // => true
```

## Variables
- stepping away from data types into using our data
- want to store our data somewhere where we can reuse it and perform calculations and other operations on it

Gives meaning to our data:
- a 4 is no longer just a 4 but the number of people sitting in the front row
- a string is no longer just a string but someone's name

- Two parts to creating a variable
    - declaring it and
    - assigning it a value

```
var myFirstVariable
myFirstVariable = 'Hello World'
```

- If we just declare a variable, it's value is `undefined`

```
var myFirstVariable = 'Hello World'
```

- call a variable to get it's value, which we do by referencing it's name

### Type Checking
- We can check the type of a variable by using `typeof()`, which returns a string for the variable's type (i.e. `'number'`, `'string'`)

```
var a = 1
console.log( typeof( a ) ) // => 'number'

var b = 'hey'
console.log( typeof( b ) ) // => 'string'

var c = true
console.log( typeof( c ) ) // => 'boolean'

var d
console.log( typeof( d ) ) // => 'undefined'
```

### Type Conversion
- we can convert a variable from one type to another
- we can convert a variables type by using conversion methods like `toString()`

```
var e = 5
console.log( typeof( e ) ) // => 'number'
e = e.toString()
console.log( typeof( e ) ) // => 'string'
e = parseInt(e)
console.log( typeof( e ) ) // => 'number'
e = e + '0'
console.log( typeof( e ), e ) // => 'string' 50
e = undefined
console.log( typeof( e ) ) // => 'undefined'
```

## Arrays
- Quick review - we now know numbers, strings, booleans - all of the basic data types
- we also know how to save data of these basic data types into variables so that we can reuse it elsewhere and actually work with that data
- what we will quickly find is that we need an efficient way of organizing our data into more than just individual variables and one way to do that is with *arrays!*
- in some other programming languages, arrays are called lists and I think that's a better way to describe what arrays are and what they do - it's a list of data

```
[1, 2, 3, 4, 5]
```

### Array Indexes
- once we've got our data into a list, we want to work with it
- How do I get the first value of an array?
- Indexes are 0 based - meaning the first item is `0`

```
var myOnlyFriends = ['Moe', 'Larry', 'Curly']

console.log( myOnlyFriends[0] ) // => 'Moe'
console.log( myOnlyFriends[1] ) // => 'Lary'
console.log( myOnlyFriends[2] ) // => 'Curly'
```

### Array Length
- the length of array is equal to the number of elements in the array
- always one larger than the index for the last element within the array

```
console.log( myOnlyFriends.length ) // => 3
console.log( myOnlyFriends[ myOnlyFriends.length ] ) // undefined
console.log( myOnlyFriends[ myOnlyFriends.length - 1 ] ) // 'Curly'
```

### Array Methods
- There are a ton of methods we can perform on arrays natively
- these let us efficiently perform some basic operations on arrays, like adding and removing elements from the beginning and end of arrays

remove and return the last element from an array
`console.log( myOnlyFriends.pop() ) // => 'Curly'`

Add an item to the end of an array
`console.log( myOnlyFriends.push( 'Christine' ) ) // => [ 'Christine', 'Moe', 'Larry', 'Curly' ]`

Reverse the order of items within an array
`console.log( myOnlyFriends.reverse() ) // => [ 'Curly', 'Larry', 'Moe' ]`

Concatenate elements of an array together into a string
`console.log( myOnlyFriends.join() ) // => 'Moe,Larry,Curly'`
