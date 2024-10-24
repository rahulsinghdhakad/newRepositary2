import express from "express"
import userRouter from "./routers/user"

const app= express();
app.use('/user',userRouter);

app.get('/', (req,res)=>{
    res.send("hello hi  ")
})

app.listen(500, ()=>{
    console.log("server is working")
})