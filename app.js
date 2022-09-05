const express = require('express');
const mongoose = require('mongoose');

require("./models/Characters");
const Characters = mongoose.model('characters');

require("./models/Pets");
const Pets = mongoose.model('pets');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/perdimeupet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

app.get("/", (req, res) => {
    return res.json({titulo: "API perdi meu pet"});
});

app.post("/characters", (req, res) => {
    const characters = Characters.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Característica não foi cadastrada!"
        });
    
        return res.status(200).json({
            error: false,
            message: "Característica cadastrada com sucesso!"
        })
    });
});

app.post("/pets", (req, res) => {
    const pets = Pets.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Pet não foi cadastrado!"
        });
    
        return res.status(200).json({
            error: false,
            message: "Pet cadastrado com sucesso!"
        })
    });
});


app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});