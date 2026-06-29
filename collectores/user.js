const USERS = require("../models/users");
async function CreateUser(req ,res){
  const {name , email , age} = req.body;
  await USERS.create({
    name,
    email,
    age
  })
  const users = await USERS.find({});
  return res.json(users);
}
async function GetUsers(req ,res){
  const users = await USERS.find({});
  return res.json(users);
}

async function UpdateUser(req, res){
  try{const id = req.params.id;
  const {name , email , age} = req.body;
  await USERS.findByIdAndUpdate(id , {name , email ,age})
    const users = await USERS.find({});
    return res.json(users);}
    catch(err){
      console.log(err);
      return res.status(500).json({ error: err.message });
    }
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