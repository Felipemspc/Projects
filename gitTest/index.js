import express from "express" ; 
import ejs from "ejs" 

const app = express();
const port = 3000;


//Configurando EJS  como o mecânismo de visualização
app.set("view engine","ejs")


// Configurando CSS e JS

app.use(express.static("public"))



//Configurando a rota index/ /.

app.get("/",(req,res)=>{
    let name = "Felipe";
    res.render("index",{name:name});
})






// configurando o servidor na porta: 3000.
app.listen(port,(req,res)=>{
    console.log(`Server currently running on port: ${port}!`)
})

