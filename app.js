const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const {mongodburl, PORT} = require('./config/configuration.js');

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
const defaultRoutes = require('./routes/defaultRoutes');
app.use('/', defaultRoutes);

app.listen(PORT , () =>{
  console.log('server running on port', PORT);
});
