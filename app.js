const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Configure to connect mongooDb
mongoose.connect('mongodb://localhost:27017/nodejs_cms',{ useNewUrlParser:true })
.then(response =>{
  console.log('mongoDB COnnected Successfully');
}).catch((err) => {
    console.log('Database Connection error');
})



// Configure express
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.use('/', (req , res) =>{
  res.send('Welcome to new CMS');
});


app.listen(3002 , () =>{
  console.log('server running on port 3002');
});
