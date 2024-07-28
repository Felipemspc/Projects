import express from "express"

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    let nome = "Felipe"
   res.render("index.ejs",{
    name: nome,
   })
   
   
})

app.listen(port,(req,res)=>{
    console.log(`Server currently running on port: ${port}`)
})