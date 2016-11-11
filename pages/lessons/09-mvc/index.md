---
index: 9
title: MVC
type: lesson
date: "2015-05-01T22:12:03.284Z"
layout: post
path: "/mvc/"
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
learningObjectives: Use Handlebars templates to turn JS into HTML; Understand each part of the MVC architecture; Use MVC to organize a front-end applications;

---


# MVC Architecture


## Class Structure
- Welcome to Class
- Do the warm up exercise
- Go over Learning Objectives
- Deliver Lesson
- Go over Learning Objectives
- Review the Final Project
- Closing Questions / Tying up loose ends
- Exit Tickets

## Homework Review
- How did people feel about the assignment?
- Do we feel confident about our understanding of working with events?
- Was this a fun / good / helpful assignment?
- Size off assignment: bigger / smaller?
- jQuery - what do people think of jQuery? Did anyone redo the pixart assignment with jQuery?

## jQuery
jQuery is a library for working with the DOM

Pros:
- provides an easy/simple interface for working with the DOM
- builds jQuery objects with a ton of helpful and easy to use methods
- truly incredible cross browser support

Cons:
- it's huge and slow
- makes it really difficult to actually learn JavaScript
- promotes a not great way of thinking about the DOM and building web applications

Why don't we spend class time on learning it?
- I'm super conflicted about whether or not to teach it.
- This is a course on JavaScript and it would be a bit of a cop out to just teach jQuery
- My fear is students wouldn't learn to understand the most important aspect of JavaScript, build dynamic web applications
- If you know it or you want to learn, go for it and feel free to use it in your homework assignments

## MVC

MVC stands for __Model - View - Controller__ and is a common way of organizing front end applications so that they're easy to build and maintain. We call this an architecture or pattern, because it's a common way of organizing code to solve similar problems, namely around organizing and choreographing the various parts of our applications.

The MVC pattern divides each resource of our application in to of three parts:

__The Model:__
The model is where we define the data or our application. The technical term is "things" and each "thing" within our application will have a model.

So if we're building an admissions application for a school, we'd have a model for student, advisor, individual applications, etc.

Each "thing" within our application gets a model

__The View:__
The view is what the user sees. In our case, this is the html and css that get's rendered to the screen. Each Model can have a couple of different views - maybe a list view where we see every instance of that model, an index view where we see a single instance in more detail. Overall, our views will comprise the user interface of our application.

__The Controller:__
The controller is where we knit our models and views together. This is where our business logic will live and where we'll choreograph our different views together.

__In Sum__, We've sort of talked about this stuff - just not necessarily in this way. Did we build models for things (like cards and decks)? Did we write code that organized and made those models work together (like in a game)? Did we build out a user interface for people to see what was happening in our application and interact with it? Those are models, views and controllers!

Similarly, I think we'll be able to pretty immediately see the benefit of having a strict structure on where we put stuff. When people were doing the lab, were they often wondering where to put something, where to write some logic? MVC solves that to a large degree.

## Views: In Depth

### Templating
- way for us to be modular and reactive in how we construct an HTML page
- rather than having entire html pages all built out that we navigate between, we can have multiple bits and pieces to our page that we use to construct full pages in response to events and other triggers


### Types of Templating Engines / Languages
- Jade / Pug:
  - html processing component gives us everything a templating engine does but includes a cleaner way to write html
- Nunjucks / Swig: logic-full templating, typically with `{% %}`
- EJS - embeded JavaScript (port of ERB: Embeded Ruby)
- Handlebars / Mustache - logic-less (typically), typically recognized with `{{}}`


### Handlebars
- we're going to be using handlebars
- every templating language has it's pros and cons
- handlebars is beginner friendly and has a nice syntax

### Try Handlebars
http://tryhandlebarsjs.com/

#### Activity 1
Basic syntax of handlebars

Handlebars:
```
<div class="profile">
  <img src="{{ person.profPic }}">
  <h1>{{ person.name.first }} {{ person.name.last }}</h1>
</div>
```

JSON:
```
{
  person: {
    profPic: "http://0.gravatar.com/avatar/f190542c0ce80b9bc399f5039f6a8b86",
    name: {
      first: "Zakk",
      last: "Fleischmann"
    }
  }
}
```

#### Activity 2
Dynamic handlebars

__Each loop__
Handlebars:
```
<div class="profile">
  <img src="{{ person.profPic }}">

  <h1>{{ person.name.first }} {{ person.name.last }}</h1>
  <h2>Todos</h2>
  <ul>
    {{#each person.todos }}
      <li>{{this}}</li>
    {{/each}}
  </ul>

</div>
```

JSON:
```
{
  person: {
    profPic: "http://0.gravatar.com/avatar/f190542c0ce80b9bc399f5039f6a8b86",
    name: {
      first: "Zakk",
      last: "Fleischmann"
    },
    todos: [
      'learn JS', 'learn HTML', 'learn CSS'
    ]
  }
}
```

__if statement__
Handlebars:
```
<div class="profile">
  <img src="{{ person.profPic }}">

  <h1>{{ person.name.first }} {{ person.name.last }}</h1>
  {{#if person.todos}}
  <h2>Todos</h2>
  <ul>
    {{#each person.todos }}
      <li>{{this}}</li>
    {{/each}}
  </ul>
  {{else}}
  <h2>Done for the day!</h2>
  {{/if}}

</div>
```

JSON:
```
{
  person: {
    profPic: "http://0.gravatar.com/avatar/f190542c0ce80b9bc399f5039f6a8b86",
    name: {
      first: "Zakk",
      last: "Fleischmann"
    },
    todos: [
      'learn JS', 'learn HTML', 'learn CSS'
    ]
  }
}
```

### Turning Handlebars into Views
Now we know how to use handlebars, lets use it to build out views for our application.

Step 1:
First we need to get handlebars locally. We can use `npm` but for this were just going to link to the library directly:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js"></script>`

Step 2:
Lets define our first view! Below `app.js` add the following:

`<script id="to-do-template" type="text/x-handlebars-template">
    <li class="todo-list-item">Learn HTML</li>
</script>`

Step 3:
- template is sort of like any html element and we can get it with JS using it's unique ID
- `var source = document.getElementById('hello-world-template')`
- `console.log( source )`

Step 4:
- How do we compile our template now that we have it?
- `console.dir( Handlebars )`, find `compile` method
- `var template = Handlebars.compile( source )`
- `var template = Handlebars.compile( source.innerHTML )`
- `console.log( template )` => function
- call the function

Step 5:
- we have our template, we've compiled it, now how do we render it?
- `var renderedTemplate = template()`
  - `console.log( renderedTemplate )`
  - returns a string of our compiled template

Step 6:
- How do we add our template to the page?
- can we used `appendChild()`
- we can set `content.innerHTML`:
  - `content.innerHTML = renderedTemplate`

Step 7:
- lets modify this to use some data
- create a data object with a todos attribute and an array of todos
- refactor our template to loop through these todos and print each out

```
var data = {
  todos: [
    'Learn JavaScript',
    'Learn CSS',
    'Learn HTML'
  ]
}
```

```
<script id="to-do-template" type="text/x-handlebars-template">
    {{#each todos}}
      <li class="todo-list-item">{{this}}</li>
    {{/each}}
</script>
```

Step 8:
- all we need to change is we need to pass this data to our function that renders the template:
`var renderedTemplate = template( data )`

__Give students a minute to let everything we did sink in__

Build out the rest of the MVC application
