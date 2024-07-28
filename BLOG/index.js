import express from "express"
import path from "path"
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve static files like css

app.use(express.static(path.join(__dirname , "public")))


app.get("/",(req,res)=>{
   res.render("index.ejs")
})


app.listen(port,(req,res)=>{
    console.log(`App currently running on port ${port}!`)
})