const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors')


// create express app
const app = express();
app.use(cors())


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

// define a simple route
app.get('/getNumber', (req, res) => {
    res.json({"number": 15});
});

// listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
