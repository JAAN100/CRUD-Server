const mongoos = require("mongoose");


async function ConnectToMongoDB(url){
  return (await mongoos.connect(url));
}

module.exports ={
  ConnectToMongoDB
}