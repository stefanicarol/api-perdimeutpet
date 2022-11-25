const mongoose = require('mongoose');
require("./pets.model");
const Pets = mongoose.model('pets');
 
// ENDPOINT PARA RETORNAR LISTA DOS MEUS PETS
exports.get = (req, res, next) => {
    Pets.find({owner:req.params.owner}).then((pets)=>{
       return res.json(pets);
   }).catch((erro)=> {
       return res.status(400).json({
           error: true,
           message:"Não encontrado!"
       })
   }) 
}; 