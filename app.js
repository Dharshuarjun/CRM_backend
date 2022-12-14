require("dotenv").config();
const express=require("express")
const app=express();
const mongoose=require("mongoose");
require("./conn");
const users=require("./userSchema");
const cors=require("cors");
const router=require("./router")

const port=process.env.PORT ||8800;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log(`server is started port number ${port}`)
})