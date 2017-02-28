---
index: 1
title: Command Line & Git
type: lesson
date: "2015-05-01T22:12:03.284Z"
layout: post
path: "/command-line/"
description: In this lesson, we'll cover the basics of navigating the file system on your computer with a tool called the command line. We'll also dive into working with a command line tool called Git and a companion tool called GitHub.
learningObjectives: Learn how to work in the Terminal; Learn the basics of Git and GitHub;

---

# The Command Line & Git
Welcome to lesson 01 of An Introduction to Javascript! Today's lesson is going to cover two things: First, we're going to learn how to navigate the file systems on our computers using the command line; Second, we're going to learn a tool called Git, a version control system (VCS) that makes working with a code base a lot easier. 

We're unfortunately not going to start with any javascript yet and this is intentional. Last time I taught this course I tried to get through learning both the command line and git as quickly as possible so that we could get to learning the good stuff: javascript. I would say that was one of the weaknesses of the last time I taught this course. So we're correcting ship, we're dedicating an entire lesson to these technologies so we don't have to revisit them later.

Lets get started!

## The Terminal
We're going to start by learning a tool called the command line or the terminal.

### Introduction

The terminal is a really powerful tool for navigating the file system on your computer. It predates the Graphical User Interface (GUI) that you're probably used to - think Finder if you're on a Mac or Explorer if you're on a PC. The Terminal is what we call a Character User Interface (CUI) because we interact with it by typing text.

The terminal is the de facto way for programmers to work and it's where we spend the vast majority of our time - by why? What's so great about it?

The terminal's advantages are:
1. It's concise and powerful - you can do a lot with relatively few keystrokes,
2. It's efficient - both as a use of time and for your machine, because it requires fewer resources,
3. It's expert-friendly - which is to say that if you invest a little time in getting good at using the command line, the productivity benefits that you'll reap are incredible,
4. It's easy to automate via scripting - you can write scripts that will handle repetitive tasks.

Lets dive into the terminal and see what we've got. If you're on a mac open the "Terminal" app; if you're on windows, open the "Git Bash" application you downloaded last class. 

### Anatomy of the Terminal Prompt
The terminal has a couple of parts to it that we should know about before we start using. Those are:
1. The Prompt: This is where we will enter our commands to be evaluated and executed by the computer
2. The Command: This is the text we'll pass to the prompt to tell it what we want to do
3. Input: The data we want the command to act on or evaluate
4. Flags/Options: additional data or modifying data that we can specify for a given command
5. Output: Information the command returns given our input

### Navigating the File System
Now lets start to use the terminal to navigate around our computer.

The first step to navigating with the command line is figuring out where we are, which we can do with the `pwd` command. `pwd` stands for Print Working Directory and it will print the absolute path to our current directory - or folder.

Now that we know where we are, it would be great to know where we can go. We can find that out with the `ls` command, which stands for list. If we run this command, we'll get a list of all the files and folders in our current directory. The `ls` command has a couple of options that we can pass it, including the `-a`, to see absolutely everything, and the `-l` to see a list view. We can combine these two into one additional option with `-la`. 

Next it would be great to be able to switch in to one of these directories listed by `ls`. We can do that with `cd` - change directory. `cd` takes the directory we want to change in to as it's input and the default input is the current user's root directory. So if we're deep in a file tree and just run `cd`, we'll go all the way back up to the top, to the user's root directory. If we want to go in to a folder, we pass the reference to that folder to `cd`; if we want to leave a folder, and go up a level, we pas `..`, which represents the parent directory to our current directory.

### Paths: Relative & Absolute
As a quick aside, I want to talk about paths. Paths represent the route you take to get to a particular file or folder. When you run `pwd`, the output is the absolute path to your current directory. We can recognize it as an absolute path because it starts from the root directory. Relative paths on the other hand, represent the route to a file or folder from the current directory. Relative paths typically start with `.` or `..`. 

### Working with Files & Folders
The second half of what we need to learn here is how to work with files and folders. We're going to follow the same pattern of inputting a command with some input and getting an output, this time our output will be files and folders.

So the first thing we want to learn how to do is to make a directory, which we can do with the `mkdir` command. `mkdir` takes the new folder name as it's input, so `mkdir test-folder` will create a folder called `test-folder`.

Deleting a folder is really easy, we just use `rmdir` and pass it the folder name, like `rmdir test-folder`. It's important to note that when you delete something through the command line, you delete it for good. It doesn't get moved to the trash, it is deleted. Forever. This means you need to be really careful about what you delete.

Making a file is really easy: we use the `touch` command and pass it the file name. For instance, we can create a file called `test.js` by running: `touch test.js`. We can remove that file with `rm`, i.e. `rm test.js`.

If we make a directory with `mkdir test-directory` and then `cd` into that directory with `cd test-directory`, we can create multiple files at once with `touch {fileOne,fileTwo,fileThree}.js`. This command will create a `fileOne.js`, `fileTwo.js`, and `fileThree.js`. We can delete these files individually or pass a wildcard selector to `rm`, like `rm *.js`. This will delete every file with the `.js` extension in the current directory.

If we make two subdirectories in our `test-directory` called `dir01` and `dir02` and create a bunch of files in `dir01`, then  we can see how to copy and move files. To copy files, we use the `cp` command and pass it the files we want to copy and the location of where we want to copy them to: `cp dir01/test01.js dir02`. If We want to move a file, then we use the `mv` command: `mv dir01/test02.js dir02`.

Now if we want to delete a folder that has files in it, we can't use `rmdir`. Instead, we need to recursively delete the folder and the files within it. If we go up a directory, using `cd ..`, we can run `rm -rf test-directory` to delete `test-directory` and everything within it. 

## Git and GitHub
		In the last session of the course, we made you install something called Git and before the course started, we made you create an account with something called GitHub. This next section of the class will cover what these tools are, why they're useful and why it's important that we learn them now. 
		Git is a version control system (VCS), which is a kind of tool for managing changes to a codebase and the history of those changes. It's a really sophisticated way for us all to work on the same set of files without accidentally overwriting each others work, while also being able to see what code is finished and what's still being developed.
		GitHub is tied to Git - it's a way for teams to host Git 'repositories' - a term will talk about soon. GitHub did not create Git, it's just a Saas tool that works really well with Git.

### Workflow
		Now that we know what these tools are, how do they work? I'll start by giving you the 20,000 foot view. 
		
		Lets say that I've started building an app. I'll need a place on my computer to keep the code I write for this app, like a folder somewhere. I want to keep track of the changes I make over time, so I'm going to use Git. This folder where my code is stored and managed by Git is called a `repository` and it's my `local` repository. 
			Lets say that I want to enlist your help in building my app. Should I put the files on a USB drive and transfer them to you that way? That would be really inefficient: you'd make changes and then we'd have to transfer them back to my computer and then we'd have to manually synchronize our changes together. Instead, we'll use Github. In Github, we'll create a repository that I'll give you access to and you'll `clone` it to your computer. This is called the `remote` or `origin` repository. 
			Now I can make changes and push them to `origin` and then you can pull those changes down. Similarly, you can make changes and push them and then I can pull them. The `origin` repository is a centralized and shared version of all our work, managed and synchronized through git.
			We're approaching our deadline but still have a lot of work left to do before we can launch our app. So we decide to hire a freelancer. We don't want to give him direct access to our `origin` repository, because we want to check his work before integrating it with ours. So our freelancer `fork`s the repository. `Fork`ing a repository is like creating a clone of it. He then copies down his `fork`, creating his `local` repository. 
			We continue to work and publish some of our changes. He needs to pull those locally, so he pulls them from what is to him, the `upstream` repository (our shared repository). He then builds out the features we ask him to, and pushes his work from his `local` repository to his `origin`, which is the forked version of our repository. He then submits a `pull request` on our repository, so we can review his work and merge it into ours (or not). 

### Creating Our First Repository
		With the 20,000 foot view out of the way, we're going to get started on the very first part of my previous explanation: building out the codebase locally.
		Lets start by creating a new directory where our application will live. We want to use git, so we need to setup this folder to be tracked by git. We do that with `git init`, and that's it! Once we run that command git will be tracking changes in that directory. So lets make some changes.
		Create a file called `README.md`. Lets open this folder in atom by typing `atom .` in the command line. Then in `README.md` lets add: `# My Awesome App`. Switching back to the command line, lets run `git status`. This command will show us the current status of our local repository. At this point we've created a file but haven't `staged` it - staging is the first step to saving our work in git and it tells git what work we would like to save the next time we do so. 
		We can add changes in files to the stage by running `git add`, either as `git add .` or `git add -a`. Now if we run `git status` again, we see that these changed files appear in green - this means we've successfully staged them to be saved, or `commit`ed. In git, to save a change and make it part of the git history, we `commit` it. Up until changes are `commit`ed, they're considered not-final. We commit these changes with `git commit`, which we'll pass a `commit` message by running it as `git commit -m "A message about our changes"`. Now if we run `git status`, it looks like we haven't done any work - because we haven't since our last commit. If we run `git log`, we can see all the `commits` we've made over time.
		Lets create a second file called `index.js` and add `console.log('hello world')` to the first line. Flip back to the terminal and check the status of our repository - how do we do that again? After we've checked the status of our repository, how do we save the changes we've made?
		This covers just about everything we'll need to know for this course about managing our local repository. If you want to go further with this, you can look up branching and revising your git history - but those are by no means required for this course.
		
		For fun now, lets say we want others to be able to collaborate on this little 'app' we've built. Lets open up github.com and navigate to our profile. Once you're there, up in the top right corner, click on the plus sign next to your profile image and select 'New Repository' from the dropdown. Give the repository a name, like `My First Repository` and click Create. We've now successfully created our first remote repository.
		We need to go back to our local repository and make the connection between it and our new remote repository - setting it as the remote repository for our local repository. We do that by copying the link to our remote repository and going back to the command line. Once there, run `git remote add origin https://www.github.com/username/repository`. You can test to see if this command worked by running `git remote -v`. You should see the link to the remote repository output by this command. 
		If we think back to the overview example from before, we're at the point where I had created a local repository, worked on the app I'm building, and then pushed it to a remote repository so that you could collaborate with me on it. 

### Forking a Repository
		You've done some great work on your little app, now it's time to bring in some help to take it over the finish line. Pair up with the person sitting next to you to, slack them the GitHub link to the repository you just created and have them slack you theirs.
		Up in the top right corner is a button to `Fork` the repository - that's what you're going to click. This is going to create a copy of the repository under your GitHub account. Take the link to the newly forked repository and clone it locally, making sure to navigate out of your GitHub repo first! You can clone a repository by running `git clone https://github.com/username/repository nameOfClonedRepo`. Once the repository finishes cloning, you need to `cd` into it. Once you're there, open up the repository in your favorite text editor and change `'hello world'` to `'hello from zakk'` - replacing my name with yours. Add and commit these changes.
		To synchronize these local changes with our origin, we run `git push origin master` where `origin` is the environment and `master` is the branch we want to push to. 
		