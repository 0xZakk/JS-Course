---
index: 0
title: Install Fest
type: lesson
date: "2015-05-01T22:12:03.284Z"
layout: post
path: "/installfest/"
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
learningObjectives: Get to know your classmates, instructors, and staff members; Install the tools we'll need to be successful in this course; Explain the structure of the course; Discuss the benchmarks for assessments in terms of class participation, homework, and unit projects; Answer the question, what makes JavaScript important?; Start answering the question, What is JavaScript?;
---

# What Makes JS Important?

We're going to start today by discussing what makes Javascript important and the sub context to this question is, why would someone want to learn javascript. There are a lot of programming languages out there, each with their own set of strengths, so why  learn this one? What are javascript's strengths?

The question of 'why learn javascript' is in no small part one that you'll have to answer for yourself. A way of rephrasing it might by, why are you in this class? or, why do you want to learn javascript?

Lucky for us, there are a lot of reasons to learn javascript. Do you want to build a well polished website with nice interactions and animations? Javascript is great for that. Do you want to build full-fledged and complex software-as-a-service applications? Javascript is great for that. Are you interested in developing graphic rich video games or maybe even interested in virtual or augmented reality? Well that's where Javascript falls short sadly.

Just kidding - Pixi.js is a great library for building 2D games, Three.js and Photon.js are both libraries for building 3D games, AFrame will let you build virtual reality experiences and awe.js will let you build augmented reality experiences - all with javascript.

So you could say that javascript is ubiquitous. Is that reason enough to learn it? Well if everyone else where programming themselves off a cliff would you join them?

## Atwood's Law
Javascript is ubiquitous - there's no doubt about that - but why is javascript ubiquitous? Maybe answering that question will help us understand why it's so important.

Back in 2007, before javascript was so ubiquitous =, a software developer by the name of Jeff Atwood proposed a new law of software development based on a trend he saw. Atwood's law states, "anything that *can* be written in javascript, *will* eventually be written in javascript.

2007 was right when javascript was really starting to take off. It's the year jQuery was created and it's predecessor MooTools had been around for a while. More and more applications were starting to move online and it looked as though the world were consolidating into a single language - a trend we still see today.

Atwood's law was based on another law of software development: the principle of least power. The principle of least power comes from Sir Tim Berners-Lee, the creator of the internet. He worked at Cern, in Switzerland, and was in charge of connecting the Cern intranet to arpanet in the United States, creating the first internet.

## Principle of Least Power
The principle of least power is a super intuitive idea: when tasked with a problem, rather than pick the most powerful solution to a problem, pick the least powerful. It's really this principle that explains why javascript is so important.

## Bring it all back together
This is all getting super academic and this is not an academic course. We're hear to learn and talk about programming, not philosophy! So let's talk about something entirely different: driving.

Can you drive? Do you have a driver's license or own a car? I'm guessing you do. Do you know how to drive stick shift? You may, but odds are you either never learnt or learnt once and then never drove stick again. That's because driving stick shift is a pain! Just to stop, you have to drop the gear, which requires pushing down on the shift pedal and dropping the gear down, all while also hitting the break. It's a huge pain! Why would anyone drive stick shift?

Well, people who love cars and driving beyond a love of getting to places on time will tell you that you have significantly more control of the car and more control of the car's engine. This is true but it comes with a trade off: the machine you're driving is complex and can take a while to learn.

This is Sir Tim Berners-Lee's great insight. Driving automatic is simple, it's easy - given that, it's practically guaranteed that more and more people will start driving automatic.

Another example is this: Think back to when you were in college, I'm sure your professors told you to pick the biggest, longest, most complex words when writing your essay, right? No - they probably didn't.

Another example is think about building a house - there are incredible complex construction tools from nail guns to jack hammers but by far and away the most popular tools strapped to any tool belt are the simple hammer and screw driver.

That is what makes javascript important.

## What makes javascript important?
Javascript is a simple language. Compared to others, the things we as software developers and programmers need to concern ourselves with when writing in javascript are fairly minimal. In C languages like C# and C++ if you want to declare a variable to store some data, you have to declare how much memory the variable will need and what type of data is stored in that variable. Yeesh - this is like driving stick all over again!

Javascript is important because it's simple. That makes it easy to learn, easy to become productive in quickly and easy to build just about anything with: well polished websites with pleasing interactions and animations, complex software-as-a-service applications, video games, data visualizations, virtual reality,  augmented reality - you name it.

## Why do you want to learn JavaScript

# What is JavaScript?
Now that we've answered the question, 'what makes javascript important?', we're going to spend some time discussing what javascript actually is.

Javascript is a programming language for building robust and feature rich applications. Done! That was easy. Have a great rest of your evening.

Just kidding.

Rather than give you a list and walk through each item in a very technical manner, I'm going to tell you a story. It's the story of javascript and through this story I hope to teach you what javascript is as a programming language, as a tool and as an ecosystem.

### 1995
Our story starts in 1995, a good year for programming languages. - maybe. I wouldn't know, I was 5. But around little 5-year-old me there was a war brewing, called the Browser Wars. One such browser was Netscape, where a man by the name of Brendan Eich worked. As we'll soon see, these were crazy times. Things were moving insanely fast and in all directions.

One day, some execs at Netscape (including Marc Andreessen) came to Brendan and asked him to build a programming language that would integrate with their browser. Flash didn't exist yet, HTML did but CSS wasn't the only way to style webpages at the time. Again, it was a crazy time.

These execs at Netscape wanted a way to add interactivity to webpages on their browser. This was an extremely novel idea and they wanted to see it implemented right, so they gave Brendan as much time and money as he thought he'd need.

Just kidding, again.

They said, "bring us what you have in 10 days". Brendan went away, drank a ridiculous amount of coffee and came back with a working prototype. In his meeting, he told the project managers that his little language was nothing more than a prototype and was not production ready. So, the project managers shipped it and LiveScript was born.

So much of understanding javascript prominence now is understanding everything that transpired through it's early years. Before we return to that, I'm going to pause and talk about what Brendan Eich built in those 10 days.

Livescript was based on a growingly popular programming called Java, which was created by a company called Sun Microsystems. Sun and Netscape were actually partnered and Livescript was created because earlier plans to just embed Java into Netscape Navigator 2 were scrapped. But, the execs at netscape wanted something that would look and feel like java, thinking that would make it easier to sell. So javascript's syntax is largely based on java - curly braces, semicolons and many of the keywords are ported directly from java.

But Eich was a really big fan of a programming language that was not very popular at the time, called Scheme, which is what's called a functional programming language. So he built javascript to be multi-paradigm, mean objects are first class citizens in javascript but so are functions. And if you look back through the history of javascript, these two paradigms have swung back and forth like a pendulum. We're currently seeing it swing back towards functional programming.

Given the opportunity, Eich looked around and saw what was cool and new and potentially groundbreaking and just went for it! Another feature javascript has that no other major programming language has is prototypal inheritance, which Eich pulled from a language called Self.  

So the important features here are:
* syntax from Java
* multi-paradigm (both Object Oriented and Functional)
* Prototypal inheritance, as opposed to Classical inheritance

### 1996
- Netscape was able to capture a majority of the browser market share in just 2 years; they were super aggressive about growth
- Microsoft launches JScript, an extremely high fidelity clone of JavaScript
- One of the first tipping points in the development and success of javascript
- Even copied in some of the languages bugs and quirks

### 1998
- Netscape retains control of the language but now they're fighting with Microsoft about it
- shop the language around to standards organizations, to create a standard for the language
- Microsoft takes over the committee and refuses to allow any changes to become part of the standard
- ECMAScript (European Computer Manufacturers Association)

### 1999
- 3rd edition of the language is agreed upon
- Then something amazing happens for the language: nothing.
- For I kid you not 10 years, there is no new spec, new additions or changes to the language, nothing is fixed, nothing.

### 2009
- nothing happens for 10 years
- gives JS the chance to build an incredible market share
- leads to incredibly wide cross-browser support

### 2000
- version 4 is scraped

### 2005
- AJAX - Asynchronous JavaScript and XML becomes mainstream
- lets us pull data from somewhere else using JavaScript and update the contents of the page based on that data
- browsers become stable/powerful enough to support applications

### 2007
- JavaScript becomes the most popular language in the world
- jQuery is created

### 2008
- Google comes out with something called V8 - an extremely efficient and fast JavaScript engine which makes JS almost as fast as regular C++

### 2009
- 5th edition of the language is agreed upon
- Node.js is released - lets us use JS on servers
- PhoneGap is released - lets us use JS to create mobile applications
- Ecosystem really kicks in

# Exercise: Thinking Like a Programmer

# Class Information, Final Questions & Exit Ticket
