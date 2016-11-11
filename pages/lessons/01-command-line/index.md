---
index: 1
title: Command Line & Git
type: lesson
date: "2015-05-01T22:12:03.284Z"
layout: post
path: "/command-line/"
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
learningObjectives: Learn how to work in the Terminal; Learn the basics of Git and GitHub; Learn how to run JavaScript from/in the Terminal

---

# The Command Line

- Welcome to Class
- Go over the Learning Objectives

## The Terminal

### Introduction
- What is the terminal?
  - Terminal = Command Line = Console
  - Terminal is a tool for us to navigate the file system on our computer
- Why might we use it?
  - (1) power (2) efficiency
  - makes it easier for us to work with our computers: get around the file system, create, edit, move files around, copy files
  - time is money - as developers, keystrokes are time - so the faster we can get around and work in our environment, the more productive we can be
- learning the terminal is sort of a barrier for entry - have to get up the learning curve before we can be really effective at our jobs
- investing time in learning your code editor reaps similar rewards

For Macs:
- Open the "Terminal" app (Applications > Utilities > Terminal)

For Windows:
- Open the "Git BASH" application

### Navigating our File System
- start by figuring out where we are now:
  - print working directory - `pwd`
  - *absolute path*
  - *root dir `~/`*
- now we know where we are, lets go somewhere. Where can we go from here?
  - list contents - `ls`
  - list all directories in the current folder
  - what's a directory?
- check pace
- lets open one of these folders
  - change directories - `cd`
  - change to (a) a specific folder, (b) go up a folder, (c) go up more than one folder, (d) go to the home folder
- navigating folders is super useful, but you guys probably don't have that many yet - so lets make some
  - make directory - `mkdir`

### Creating a folder for our classwork
- kick in doing something useful: lets make a set of folders for us to organize our notes and homework assignments from class
  - how do we make a new folder? `mkdir js_dc_3`
  - how do we change into that folder? `cd js_dc_3`
  - How do we create a file? `touch class_notes.md`
  - What if we want to make multiple folders at once?
  - What if we want to remove a folder?
  - What if we create a folder and we want to copy it?
  - How to we move files from one folder to another?

Sum Up Exercise: Write all the commands we just learnt on the board and ask follow up questions on each

## Activity: Customizing your Bash Profile
- Setup short command for your text editor
- Edit and modify your command prompt
- Find and implement a terminal theme (background and text color)
- Add the branch or repository to your command prompt

## Git and GitHub
- Last class we installed something called Git and we made you all get accounts on something called GitHub before this course started
- What are these?

GIT: version control software
- gives us the ability to do line by line edits to watched files
- we initialize a repository - a folder  of files we want to watch with git
- when we make changes to those files, git records those changes, per line
- When can then stage those changes, commit them (like saving), then push them
- push them to a remote repository

GitHub: SaaS tool for working with Git
- hosting remote repositories
- collaboration on a single codebase

### How do we use git
- Create a `repository` - `git init`
  - now that we have a working repository, what next?
  - think of it like saving our changes
- moving up:
  - start with the files locally on our machine
  - stage these changes - tells git we want to "save" these changes
  - commit these changes - "saves" these changes locally
  - push commit history to the remote repository - gives everyone else working on this project access to our work
  - pull commits to our local repository
- Now lets do all of this together
  - check to see if we have changes that we can stage and commit: `git status`
  - stage changes to be committed -  `git add .`
  - commit changes `git commit` or `git commit -m "commit message"`
  - create a remote repository for us to push changes to on GitHub
  - add that repository as the `remote origin`
  - push changes to that repository
  - refresh the page to see if they showed up

### If there is extra time
- send the link to your repository to the person sitting next to you
- take that repository and clone it locally
    - make some changes, stage and commit them, then push them
    - pull the changes to your own repository

## Activity: Scavenger Hunt
https://github.com/ga-students/js_dc_scavenger_hunt

## Command Line JavaScript
- the last things we need to cover that we installed last class are Node and NPM, what are these?
- I explained to some of you that Node is a JavaScript runtime
  - from the timeline, Chrome's V8 engine - super performant JavaScript Engine
  - unpack that a little bit:
    - an engine "runs" the language
    - remember the language spec determines the features of the language and how it should work but someone has to go build that
- Node is built on top of V8, but does not require a browser
  - unique because it works outside of the browser
  - lets us manage servers and databases and do all sorts of non-browser, back-end things with JavaScript - building APIs
  - lets us run JavaScript from our terminal


- running files with Node
  - create a js file that console.logs hello world to the console
  - take user input

- using the node repl
  - using the node repl


- what is npm
- running npm init
- installing a package with npm
  - `npm install --save-dev flip-text`
  - requiring an npm package and using it
  - taking user input: `var argument = process.argv[2]`
