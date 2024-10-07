import express from "express";

import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Configurando EJS como o mecanismo de visualização
app.set("view engine", "ejs");

app.use(bodyParser.json()); // Processando JSON

// Configurando CSS e JS
app.use(express.static("public"));

let userName = "Felipe";  // Nome inicial

// Rota inicial (index)
app.get("/", (req, res) => {
    console.log("GET / - Rendering with name:", userName);  // Verifica o nome atual
    res.render("index", { cambio: userName });
});

// Rota POST para atualizar o nome
app.post("/set-name", (req, res) => {
    console.log("POST /set-name - Body received:", req.body);  // Verifica o corpo da requisição
    userName = req.body.name || "Guest";
    console.log("Name updated to:", userName);  // Verifica a atualização do nome
    res.json({ status: "Name Updated" });
});

// Configurando o servidor na porta 3000
app.listen(port, () => {
    console.log(`Server currently running on port: ${port}!`);
});
