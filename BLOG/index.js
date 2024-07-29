import express from "express"
import path from "path"
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// serve static files like css

app.use(express.static(path.join(__dirname , "public")))

// In-memory storage for posts
let posts = [];

app.get("/",(req,res)=>{
   res.render("index.ejs")
})

app.post("/postado",(req,res)=>{
    const content = req.body.conteudo
    res.json({content})
})

app.listen(port,(req,res)=>{
    console.log(`App currently running on port ${port}!`)
})