var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const mongoose = require('mongoose');
 
// use alternate localhost and the port Heroku assigns to $PORT
const host = '0.0.0.0';  
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

require("./api/models/characters.model");
const Characters = mongoose.model('characters');

require("./api/models/pets.model");
const Pets = mongoose.model('pets');

 
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.all('/*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*'); // restrict it to the required domain
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type,Content-type');
        if (req.method == 'OPTIONS') {
            res.status(200).end();
        } else {
            next();
        }
    });
app.use('/', require('./index.js'));

var server = app.listen(1338, function () {
        console.log('Express server listening on port ' + server.address().port);
});


mongoose.connect(MONGODB_URI, {
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

// ENDPOINT PARA CADASTRAR UM CARACTERÍSTICAS
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

// ENDPOINT PARA RETORNAR LISTA DE CARACTERÍSTICAS DO PETS
app.get("/characters", (req, res) => {
    Characters.find({}).then((character)=>{
        return res.json(character);
    }).catch((erro)=> {
        return res.status(400).json({
            error: true,
            message:"Não encontrado!"
        })
    }) 
});

// ENDPOINT PARA CADASTRAR UM PET
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

// ENDPOINT PARA RETORNAR LISTA DE PETS
app.get("/pets", (req, res) => {
    Pets.find({}).then((pets)=>{
        return res.json(pets);
    }).catch((erro)=> {
        return res.status(400).json({
            error: true,
            message:"Não encontrado!"
        })
    }) 
});

// ENDPOINT PARA RETORNAR LISTA DE PETS ACHADOS
app.get("/pets_find", (req, res) => {
    Pets.find({status:1}).then((pets)=>{
        return res.json(pets);
    }).catch((erro)=> {
        return res.status(400).json({
            error: true,
            message:"Não encontrado!"
        })
    }) 
});
// ENDPOINT PARA RETORNAR LISTA DE PETS PERDIDO
app.get("/pets_lost", (req, res) => {
    Pets.find({status:2}).then((pets)=>{
        return res.json(pets);
    }).catch((erro)=> {
        return res.status(400).json({
            error: true,
            message:"Não encontrado!"
        })
    }) 
});
 
app.listen(PORT, host, function() {
    console.log("Server started.......");
  });
 
