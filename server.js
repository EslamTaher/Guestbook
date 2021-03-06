const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const messages = require('./routes/api/contacts');

const app = express();
//bodyParser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;
//connect to mongo
mongoose.connect('mongodb://localhost:27017/guestbook')

    .then(() => console.log("mongodb connected successfully....."))
    .catch((err) => console.log(err));

    


//use routes
app.use('/api/contacts',messages);

const port = process.env.port || 5000 ;

app.listen(port , () => console.log(`server start at port ${port}`));