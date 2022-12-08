# AJAX/API/Promises/Async Await! 

## Using this Repo
This repo is to be used as a companion for the W15D4 lecture. It contains the
same code that will be used during lecture.

## Getting started: install dependencies
After cloning this repository, cd into its directory and run
```bash
npm install
```
Once that's complete you can move on to running the server and testing the code

## Starting the server
All of the code for the server is contained wthin `app.mjs` file. This file
extension may seem a bit wonky, but its an easy way to let node that it should
treat this file as if it were a module. 

Inside of the file, you'll see some code as well as some comments that give an 
brief explainer for what's happening on each line. Take note of the `port` 
variable as it defines which port our server will listen at. If 5000 is an
occupied port (looking at you, MacOS), you can reassign the port to something
else that's free (8000 is a good alternative).

Once you're settled on a port, you'll run `node app.mjs` in your terminal. 

Afterwards, you can view everything at `http://localhost:5000/` or replace 5000 with
whatever number you settled on for a port


## What does it do?
Well, mostly, it serves the HTML, JavaScript and CSS that make up our tiny front end.
It also serves the data that's in our cats.json file. The former will come from a 
`GET` request at the `/` route, and the latter from a `GET` request at the `/cats`
route.

## What will we use it for?
We'll be exploring promises (both promise chaining and async/await syntax) as well as
AJAX by hitting this server. Take a look at the `cat-card.js` file. In here, we've got
some JavaScript classes that will create new HTML elements for us. The `CatCard` class
will create cards to render our cats. Once we have the data from our server, we'll use
the `new CatCard(catdata)` paradigm to create those elements, then append them 
somewhere to see them. See if you can find any places in the HTML to add them in! 

Once you've got some ideas, head over to `src/index.js` and lets get started!


