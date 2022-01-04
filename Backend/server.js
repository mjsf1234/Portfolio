import express from "express";

const Port = process.env.Port || 8001;

const app = express();

app.post('/test' , (req,res)=>{
    res.send("hello")


})
app.listen(Port, console.log(`server is listening on port ${Port}`))