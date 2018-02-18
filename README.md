# The Humber Web Development & Interactive Media Graduating Class of 2018 Website

Maybe this name will get shorter when the event has a title... or maybe it'll get longer. We'll see.

## How to Make Changes

To work on a new feature or to fix something, you'll need to create a branch.

```
git checkout -b my-feature-or-fix
```

This is shorthand for:

```
git branch my-feature-or-fix
git checkout my-feature-or-fix
```

This will create a new branch and make it the one you'll be editing when you mess with the files.

From here, you can do whatever you need to to update the project. Have fun!

When you're all done with your changes you can push them to the github repository where they'll be added as a new branch.
You'll first need to add everything you did to the 'staging aria' or whatever.

```
git add -A
```

That'll add everything, including new files to the thing.

Now, you're ready to commit the changes.

```
git commit -m "what I added or fixed"
```

And now it's ready to be pushed to Gitgub! Woo!

```
git push origin my-feature-or-fix
```

Now it should show up on the Github page as a new branch.
Once it's been reviewed, It'll be merged with the master branch.



