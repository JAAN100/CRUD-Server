const {Schema , model} = require("mongoose");

const userSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  age:{
    type:Number,
    required:true,
  }
} , {timestamps : true});


const USERS = model("users" , userSchema);
module.exports = USERS;