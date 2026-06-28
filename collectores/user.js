const USERS = require("../models/users");
async function CreateUser(req ,res){
  const {name , email , age} = req.body;
  const users = await USERS.create({
    name,
    email,
    age
  })
  return res.json({users});
}
async function GetUsers(req ,res){
  const users = await USERS.find({});
  return res.json(users);
}

async function UpdateUser(req, res){
  const id = req.params.id;
  const {name , email , age} = req.body;
  await USERS.findByIdAndUpdate(id , {name , email ,age})
  .then(updatedUser => res.json(updatedUser))
  .catch(err => console.log(err));
}

async function GetUsersByID(req,res){
  const id = req.params.id
  const user = await USERS.findById(id);
  return res.json(user);
}

async function DeleteByID(req ,res){
  const id = req.params.id;
  await USERS.findByIdAndDelete(id)
  .then(user => res.json(user));
}
module.exports ={
  CreateUser,
  GetUsers,
  GetUsersByID,
  UpdateUser,
  DeleteByID
}