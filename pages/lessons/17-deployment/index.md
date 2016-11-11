---
index: 17
title: Deployment
type: lesson
date: "2015-05-01T22:12:03.284Z"
layout: post
path: "/deployment/"
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
learningObjectives: Understand the difference between static and dynamic applications; Learn how to deploy static sites; Learn how to deploy a dynamic site;

---

# Deployment

## Class Structure
- Welcome to Class
- Do the warm up exercise
- Go over Learning Objectives
- Deliver Lesson
- Go over Learning Objectives
- Review the Final Project
- Closing Questions / Tying up loose ends
- Exit Tickets


## User Experience Exercise
__Quick UX/UI exercise to draw and iterate on final project__
We're going to start class with two quick User Experience exercises that will help you think more holistically about your application.

Each exercise we do is aimed at making the idea in your mind a little bit more clear so that when you go to start building, you have a plan of what it is you're building - what the finished product will be.

Today we're going to be doing _wireframing_ and _user journeys_.

__wireframing:__ sketch and outline the views of our applications, without necessarily thinking about styling yet

__user journeys:__ creating a map of how a user will navigate through and around your application

These two exercises are going to help us achieve two things: (1) understanding what views we'll have in our application and help us understand how each view is going to be structured and (2) understand the architecture of our application


### Wireframing
Wireframing is the process of quickly sketching out the views of our applications

The purpose is to quickly test out different ideas. Nothing we draw is final, we can throw anything away and start over. The goal is to come up with a layout and organization for the content of a specific view that will work the best.

To do this we need to think about what each view is going to show and so what kind of information we're going to have on it.

The best way to do this is to start broad and work our way down

__See it in action:__
- wireframe a view of your application
- probably the farmer's market detail view
- things to consider: what information do I want to show on this page:
  - image, title, location, link to driving directions?

__Class Activity:__
- now everyone pick one potential view from their application and wireframe it
- think about what information you might have on your view first
- come up with three different ways of displaying that information


### User Journeys
User Journey mapping the processes of mapping the flow of users through an application. This typically has a very specific goal, like getting them to sign up or become a member of your application or to get them to purchase your product.

At their softer, more UX-ey level, they get in to a lot about who your actual users are by creating user personas. They also help you identify parts of your application that could be bottlenecks.

At their more technical level, they'll basically translate into the routes and views of your application and how they all relate to each other.

__See it in action:__
- map out all the views of your application and how they'll relate to each other
- start with the home page, search for farmer's markets by location, then open the view for a specific farmers markets

__Class Activity:__
- Everyone map out the navigation through their application


## Deployment
__Cover the basics of deployment__
Deployment is the process of getting the application on to the internet - broadly speaking.

Little more nuanced than that -  our application is going to run on a server somewhere - just like it does on our own laptops - with all the dependencies we need, with a database set up, and any other environment configuration that we need.

If you've ever hosted a website with something like BlueHost or GoDaddy, this is the exact same thing. Except, we need a little bit more control of the server itself.

That said - not every site we've built has relied on a server and not every website uses a "server" like express.

Deploying and hosting these different kinds of sites/applications is different. Hosting options are different.

I'm going to talk about static deployment and hosting and Christine is going to talk about dynamic hosting and deployment.

### Static deployment and hosting
__Hosting on GitHub Pages, branching, static sites, etc__
Static applications are harder and harder to define now-a-days, but basically it means that we either don't need a server and database to run our application or that our application is decoupled from our server and database.

If we look at the diagram of a full stack application - if the front end is not delivered by the back end, then we can deliver the front end statically.

What this means it that our final HTML, CSS and JS all already exist - we're not doing any compilation at run time - so we can serve these and any other assets statically - as they are.

An example of a static application that we've built is Pixart. For that application, we had a single html file, css file and js file and all the logic for that application was contained within those three files. In this case, there is no communication with a backend. So we can deliver this application to our users with a static hosting option - like a content delivery network (CDN).

For this, we're going to use GitHub Pages, which is an option for hosting static sites straight from the repository where the code is maintained and is free for GitHub users.

### Deploying to GH Pages
- create a repository
- clone that repository locally
- add some files to it ( add the pixart application )
- push that up to master and check to see if it's working
- check out the gh-pages branch and push the gh-pages branch
- navigate to the website and see it live

### Dynamic deployment and hosting (Heroku)

Dynamic websites differ from static websites in that they do more things that our web browsers can identify. For example - if you are buying something online, it's easy to understand that the prices and the availability of that item are dynamically recovered from some data, generally stored in databases.

This process of recovering data and processing it before responding to our browsers as web pages containing that information, is called server-side processing.

With the advent of processing server-side scripts, came forward Web Content Management Systems, allowing us to create and maintain databases connected to the internet. Websites with server-side processing are referred to as web applications.

The downside of server-side based websites is their vulnerabilities. Security issues are common among them and there are a lot of measures we need to take to prevent attacks.We need to protect our users, our site, and our server.

(Show the comparison between static and dynamic image)

-The client sends an HTTP request to the server - which dispatches the request to the application server
-The application server may request data from a database first, and then constructs the HTTP response based on the data recovered from the database
-The response is passed back to the web server, which returns the HTML file, constructed by the application server, to the client, via HTTP response
** This is called server-side processing

The big takeaway is, dynamic webpages are not served as-is by the web server as static pages are. They are constructed for every HTTP request sent by each client.

- Who can explain what the cloud is?


### Environments
- Development Environment:
- Typically developers should have their own development computer (physical or virtual) with the necessary software installed.
- Testing Environment:
- Unit testing can be completed in a Virtual Server environment. You should, however, conduct your performance testing in a physical environment with hardware and software that is identical to the production environment.
- Staging Environment:
- You typically use the staging environment to "unit test" the actual deployment of the solution. The software installed in the staging environment should closely match the software installed in the production environment. It may, however, be acceptable to use computers running Virtual Server in the staging environment since this environment is not to be used for measuring performance.
- Production Environment
  The production environment is the "live" environment that will host the running application. The production environment is the final endpoint in the release management process and should only host applications that have previously undergone development, unit testing, load testing, and staging in the other environments. Thorough unit testing, load testing, and staging beforehand will help ensure maximum performance and uptime for the application in the production environment.


#### What is Heroku
- Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps
- Heroku can deploy applications written in Ruby, Node.js, Java, Python, Clojure, Scala, Go and PHP
- An application is a collection of source code written in one of these languages,perhaps a framework, and some dependency descrition that instructs a build system as to which additional dependencies are needed in order to build and run the application (i.e.: your package.json file)
- Your source code, along with the dependency file should provide enough information for the Heroku platform to build your application, to produce something that can be executed
- You don't need to make any changes to an application in order to run it on Heroku- one requirement is informing the platform as to which parts of your application are runnable
- If you’re using some established framework, Heroku can figure it out. For example, in Ruby on Rails, it’s typically rails server, in Django it’s python <app>/manage.py runserver and in Node.js it’s the main field in package.json.



#### Deploying applications
- Git is the powerful, distributed version control system that we've all been using to manage and version our source code
- Heroku uses git as the primary means for deploying applications
- When you create an application on Heroku, it associates a new git remote, typically named 'heroku', with the local git repository for your application
- As a result, deploying code is just the familiar 'git push', but to the heroku remote instead: $ git push heroku master



#### Building applications
- When the Heroku platofrm receives the application source, it initiates a build of the source application.
- The build mechanism is typically language specific, but follows the same pattern, typically retrieving the specified dependenceis and creating any necessary assets
- The source code for your applicaiton, together with the fetched dependencies and output of the build phase such as generated assets of compiled code, as well as the language and framework, are assembled into a 'Slug' - the bundle of all these parts ready for execution
- These slugs are fundamental to what happens during application execution, they contain your compiled, assembled application - ready to run - together with the instructions(the Procfile) oh what you may want to execute



#### Running applications on dynos
- Heroku executes applications by running a command you specified in the Procfile, on a dyno that's been preloaded with your prepared slug
- Think of a running dyno as a lightweight, secure, virtualized Unix container that contains your application slug in its file system. They provide the environment required to run an application
- Generally, if you deploy for the first time, Heroku will run 1 web dyno automatically. In other words, it will boot a dyno, load it with your slug, and exercute the command you've associated with the web rpocess type in your Procfile
- Dynos are an important means of scaling your application.

#### Config vars
- An application's configuration is everything that is likely to var between environments (staging, production, dev environments etc) This includes backing services such as databases, credentials, or env variables that provide some specific information to your application
- Heroku lets you run your application with a customizable configuration - the config sits outside of your application code and can be changed independently of it
- The config for an application is stored in config vars. At runtime, all of the config vars are exposed as environment variables so they can be easily extracted programatically. All dynos in an  application will have access to the exact same set of config vars at runtime
