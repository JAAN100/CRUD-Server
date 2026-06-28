const express = require("express");
const {ConnectToMongoDB} = require("./connection");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/user");
const PORT = 8000;

ConnectToMongoDB("mongodb://127.0.0.1:27017/crud")
.then(()=>{
  console.log("Connected To MongoDB!");
});

app.use(cors({
  origin: "https://crud-frontend-orpin-nine.vercel.app/" // add this after frontend is deployed
}));
app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use("/api" , userRouter);







app.listen(PORT , ()=>{console.log("Connected!");
}) 



