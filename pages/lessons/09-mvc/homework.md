# Assignment
We've built out a simple todo list application using MVC and JavaScript!

Now we want to take that application and build it out a little bit.

The following are bonus activities to do on your own. Do the one that you think is interesting!

1. Add options for each todo like 'Complete' and 'Delete'.

You'll need to refactor your template to include links to mark each todo as complete or delete it. Then in your model, you'll have to modify your todos to be objects (instead of strings in an array) with a isComplete property that is either true or false. Finally, in your controller, you'll need to create methods that will handle that functionality for when users mark a todo as complete or delete it.


2. Add a Current Todo view

You'll need to create a new template for a Current Todo and give each todo a way to make it the featured to do. You may also want to restructure your application. While we're at it, lets change our model so that each todo is an object with a 'description' property that is shown when a todo is featured. You'll need to add methods to your controller to make a todo the Current Todo and reorganize your data so only one Todo is featured at a time.


# Reading
- [A List Apart, JavaScript MVC](http://alistapart.com/article/javascript-mvc)

For your skimming (or skipping) pleasure:
- [You Might Not Need jQuery](http://youmightnotneedjquery.com/)
