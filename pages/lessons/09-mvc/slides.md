

<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/5225/JS-logo-official.png" style="max-width: 100px; border: none; box-shadow: none" />
## Class 08: MVC

---
### Agenda
| Timing | Topic                                    |
| ------ | ---------------------------------------- |
| 5  min | Check In                                 |
| 45 min | Warmup / Review  (quick: WTF is jQuery)  |
| 10 min | Intro to MVC                             |
| 5  min | Break                                    |
| 50 min | MVC cont'd                               |
| 5  min | Break                                    |
| 20 min | MVC cont'd                               |
| 30 min | Exercise                                 |
| 5  min | Closing Questions & Exit                 |

---
## Looking Ahead

| Lesson No. |        Topic             |
| ---------- | -----------------------  |
|     07     | Intro to the DOM         |
|     08     | Events                   |
|   **09**   | **MVC Architecture**     |
|     10     | Express                  |
|     11     | CRUD & DBs               |
|     12     | APIs                     |
|     13     | Lab #2                   |

---
## Homework Review

---
## jQuery

--
### jQuery: Pros
- easy/simple interface for working with the DOM
- builds jQuery objects with a ton of helpful and easy to use methods
- truly incredible cross browser support

--
### jQuery: Cons
- it's huge and slow
- makes it really difficult to actually learn JavaScript
- promotes a not great way of thinking about the DOM and building web applications

---
## Warmup Exercise
Refactor slideshow to respond to events

---
## MVC
Model - View - Controller

--
### Model
- the data of our application
- application's resources
- each "thing" gets a model

--
### View
- what the user sees
- the user interface for our application

--
### Controller
- where we knit our models and views together
- our business logic

--
## MVC in Sum

|             |                  |
| ----------  | ---------------- |
| Model:      | Application Data |
| View:       | User Interface   |
| Controller: | Business Logic   |
|             |                  |

---
## Views (and Templating)
A brief sidestep to talk about templating

--
### Templating: A Brief Introduction
- Break up an `html` page into components or partials
- Dynamically build out entire `html` pages
- Bring functionality to our markup

--
### Types of Templating Languages/Engines
3 Flavors of templating:
- Jade / Pug
- Nunjucks / Swig ( EJS, sort of )
- Handlebars / Mustache

--
### Jade / Pug
```
h1 This is a Pug template
h2 By #{author}
```

--
### Nunjucks / Swig
```
<h1> Hello {% name %} </h1>
```

--
### EJS
```
<h1> Hello <% name %>  </h1>
```

--
### Handlebars / Mustache
```
<div class="entry">
  <h1>{{ title }}</h1>
  <div class="body">
    {{ body }}
  </div>
</div>
```

--
### Up and Running with Handlebars
http://tryhandlebarsjs.com/

--
### Turning Handlebars into Views

--
### Adding a model

--
### Wrapping it all together with a controller

---
## Final Projects

- [Assignment](https://github.com/ga-students/JS-DC-3/final-project)
- [Ideas](https://gallery.generalassemb.ly/WDI)

--

### Final Project Schedule

- Idea Submission: July 18
- UI Draft: August 2
- In Class Lab Time: August 16
- Presentations/Due: August 18
