const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const {mongodburl} = require('./config/configuration.js');

const app = express();

// Configure to connect mongooDb
mongoose.connect(mongodburl,{ useNewUrlParser:true })
.then(response =>{
  console.log('mongoDB COnnected Successfully');
}).catch((err) => {
    console.log('Database Connection error');
})



// Configure express
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(express.static(path.join(__dirname, 'public')));

// Setup View Engine To use handlebars
app.engine('handlebars', hbs({defaultLayout:'default' }));
app.set('view engine', 'handlebars');

// Routes
app.use('/', (req , res) =>{
  res.render('default/index');
});


app.listen(3002 , () =>{
  console.log('server running on port 3002');
});
