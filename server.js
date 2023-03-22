const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// / is a special endpoint for browser that will cause chrome to set us up.
//Everything is being pushed to the chrome browser. Now we need to make endpoints for CSS, so html can sill connect to it.

app.get('/css', (req, res) => {
    res.sendFile(__dirname + '/public/styles.css')
})

//now go to html and reconnect them properly.
//not stylesheetcss

app.get('/js', (req, res) => {
    res.sendFile(__dirname + '/public/main.js')
})

//Same with html and js.
//not main.js

app.listen(5150, () => {
    console.log("app is up on 4000")
});

//make sure your browswer is a local host instead of a live server - url should say http://localhost:5150/