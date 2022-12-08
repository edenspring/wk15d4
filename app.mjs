import express from 'express';
// We'll learn more about express in a few weeks!
import path from 'path';
// This is a part of node that lets us get paths on the local system
import { fileURLToPath } from 'url';
// This is another part of node that lets see where our current file is
import cats from "./cats.json" assert {type: "json"}

const __filename = fileURLToPath(import.meta.url)
// find the filename of our current module
console.log(__filename)
const __dirname = path.dirname(__filename)
// pull out the direectory name from our current file
console.log(__dirname)
// These are written using conventional naming (and what other JS files will work with)
// Since this is a module file (written to support import ... from syntax), we don't have
// access to the built in __dirname, so, we had to make it ourselves!

const app = express()
// Initialize our express app

const port = 5000;
// Set a port for it to listen at

app.use(express.json());
// Allow our express app to make use of JSON

app.use(express.static(__dirname+'/src'))
// Allow loading of resources from src directory
console.log(__dirname+'/src')

// Define route to serve our HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/cats', (req, res)=> {
    res.json(cats)
})

// Start server
app.listen(port, ()=> console.log(`Server listening on port ${port}...`))