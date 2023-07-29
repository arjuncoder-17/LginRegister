import express from "express"
import cors from "cors"
import mogoose from "mongoose"
import bodyParser from "body-parser"

const app=express();
 app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("yourmongodburi",{
  useNewUrlParser: true,
  useUnifiedTopology: true
},()=>{
  console.log("DB connected");
})

//Routes
app.get("/",(req,res)=>{
  res.send("My API")
})

app.listen(9002,()=>{
  comsole.log("BE started at port 9002")
})
