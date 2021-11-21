const express = require("express");
const app = express();
const mongoose=require("mongoose");
const url="mongodb+srv://test:test@cluster0.79a9d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema=require('./todoSchema')
app.use(express.json())
app.post("/add-new-post",async(req,res)=>{
    const mystd_name =req.body.std_name;
    const myreg_num =req.body.reg_num;
    const mymarks=req.body.marks;
    try{
    const newTodo = new mySchema(
        {
            std_name:mystd_name,
            reg_num:myreg_num,
            marks:mymarks,
        }
    )  
    const saveTodo=await newTodo.save()
    res.json(
        {"message":"todo is saved","data":saveTodo}
    )
    }
    catch(err){
        res.json(err);
    }
}
)
mongoose.connect(url).then(()=>console.log("connected to db"))
app.use("/",(req,res)=>{
    res.json(
        {"message": "express server started"}
    )
})
app.listen(3000,()=>console.log("express started"))