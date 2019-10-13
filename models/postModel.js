const mongoose = require('mongoose');
const schema = mongoose.Schema;

 const PostSchema = new schema({
   title:{
     type:String,
     required: true
   },
   status:{
     type:String,
     default:'public'
   },
   description:{
        type:String,
        required: true
   },
   creationDate:{
     type:'date',
     default:Date.now()
   }
 });
