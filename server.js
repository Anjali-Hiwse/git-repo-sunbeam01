var express=require("express");
var app=express();

app.listen(1234,()=>{
    console.log("server started ...");
});

app.get("/",()=>{
    console.log("This is Git  file");
});

app.get("/",()=>{
    console.log("Welcome git hub");
});