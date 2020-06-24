const express=require("express")
const app=express();
const multer=require("multer");
const storage=multer.memoryStorage();
const upload=multer({storage:storage})

app.post("/url",(req,res)=>{
    const userImage=req.file;
    const userData =req.body;
    const image=upload.single('userImage');
    console.log(userImage,userData,image);
})


