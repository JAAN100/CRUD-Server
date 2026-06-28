const express = require("express");
const {ConnectToMongoDB} = require("./connection");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/user");
const PORT = 8000;

ConnectToMongoDB(process.env.MONGODB_URI)
.then(()=>{
  console.log("Connected To MongoDB!");
});

app.use(cors({
  origin: "https://crud-frontend-orpin-nine.vercel.app"
}));
app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use("/api" , userRouter);


app.use("/" , (req , res)=>{
  return res.json({});
})






app.listen(PORT , ()=>{console.log("Connected!");
}) 



