import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Adquirindo o nome do diretorio
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurando o diretório de arquivos estáticos e views
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Guardando as postagens
let posts = [];

// bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
   res.render("index");
 
});
// rota para botão home do header.
app.get("/index.ejs",(req,res)=>{
  res.render("index")
})

//rota para botao posts do header

app.get("/posts", (req, res) => {
  res.render("posts", { posts });
});

app.post("/posts", (req, res) => {
  const { conteudo, titulo } = req.body;
  posts.push({ titulo, texto: conteudo });
  res.redirect("/posts");
});

// Deletando Posts

app.post("/delete",(req,res)=>{
 const postTitle = req.body.postTitle;
 const postIndex = posts.findIndex(post => post.titulo === postTitle)

 if(postIndex !== -1){
  posts.splice(postIndex,1);
  res.redirect("/posts");
 }else{
  res.status(404).send({message:"Post não encontrado."})
 }
 
})

// Editando Posts

app.get("/edit",(req,res)=>{
  const postTitle = req.query.postTitle;
  const post = posts.find(post => post.titulo === postTitle);
  if(post){
    res.render("edit",{post});
  }else{
    res.status(404).send({message: "Post não encontrado."});
  }


})

// Post Editado

app.post("/edit",(req,res)=>{
  const {originalTitle,titulo,conteudo} = req.body;
  const post = posts.find(post => post.titulo === originalTitle);
  if(post){
    post.titulo = titulo;
    post.texto = conteudo;
    res.redirect("/posts");
  }else{
    res.status(404).send({message:"Post não encontrado."});
  }
})

// get Header 

app.get("/header",(req,res)=>{
  res.render("header")
})

app.listen(port, () => {
  console.log(`App currently running on port: ${port}.`);
});
