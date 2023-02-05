//firing an express server
//we can start the server with 'npm start', since we's set the start script at package.json
const express = require('express');
const path = require('path');
const port = 8000;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const todo = require('./models/todo');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('assets'));
//use express router
app.use('/', require('./routes'))

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`); //interpolation, using backticks
    }
    console.log(`Server is running on port: ${port}`);
});