const mongoose = require('mongoose');
require("./characters.model");
const Characters = mongoose.model('characters');

// ENDPOINT PARA CADASTRAR UM CARACTERÍSTICAS
exports.post =  (req, res) => {
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
};

// ENDPOINT PARA RETORNAR LISTA DE CARACTERÍSTICAS DO PETS
exports.get =  (req, res) => {
    Characters.find({}).then((character)=>{
        return res.json(character);
    }).catch((erro)=> {
        return res.status(400).json({
            error: true,
            message:"Não encontrado!"
        })
    }) 
};

 
 