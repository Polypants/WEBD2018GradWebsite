# Elevate 2018 Website

The Humber Web Development & Interactive Media Graduating Class of 2018 Website

## Getting Started

Run the following command in the terminal to download the project with git.
(make sure you're in a folder where you want the project to be, otherwise it will be on your user folder)

```
git clone https://github.com/Polypants/WEBD2018GradWebsite.git
```

Now you can now `cd` into the folder and run `npm i` or `npm install` to install the dependencies.
To start the dev server run `npm start`

## Making Changes

Before you do anything, it's a good idea to check if your local files are up-to-date.

```
git pull
```
Now that that's done...
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
You'll first need to add everything you did to the 'staging area' or whatever.

```
git add -A
```

That'll add everything, including new files to the thing.

Now, you're ready to commit the changes.

```
git commit -m "what I added or fixed"
```

And now it's ready to be pushed to Github! Woo!

```
git push origin my-feature-or-fix
```

Now it should show up on the Github page as a new branch.
Once it's been reviewed, It'll be merged with the master branch.



