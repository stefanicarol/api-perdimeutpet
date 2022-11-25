const mongoose = require('mongoose');
require("./pets.model");
const Pets = mongoose.model('pets');


// ENDPOINT PARA CADASTRAR UM PET
exports.post = (req, res) => {
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
 };
 
// ENDPOINT PARA RETORNAR LISTA DE PETS
exports.get = (req, res) => {
    Pets.find({}).then((pets)=>{
        return res.json(pets);
    }).catch((erro)=> {
        return res.status(400).json({
            error: true,
            message:"Não encontrado!"
        })
    }) 
 };
   
// ENDPOINT PARA RETORNAR LISTA DE PETS ACHADOS ou PERDIDOS
exports.getById = (req, res, next) => {
     Pets.find({status:req.params.id}).then((pets)=>{
        return res.json(pets);
    }).catch((erro)=> {
        return res.status(400).json({
            error: true,
            message:"Não encontrado!"
        })
    }) 
 }; 

     