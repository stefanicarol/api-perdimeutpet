const mongoose = require('mongoose');

const Pets = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },     
    elements:
        [
            {    cat_breed: {
                    type: Number,
                    required: false
                },
                color: {
                    type: Number,
                    required: true
                }, 
                gender:{
                    type: Number,
                    required: false
                }, 
                dog_breed: {
                    type: Number,
                    required: false
                }, 
                owner: {
                    type: String,
                    required: true
                }, 
                pelage: {
                    type: Number,
                    required: true
                },
                size: {
                    type: Number,
                    required: true
                },
                species: {
                    type: Number,
                    required: true
                },
                status: {
                    type: Number,
                    required: true
                },
                photo: {
                    type: String,
                    required: true
                },
            }
        ],    
},
{
    timestamps: true,
});

mongoose.model('pets', Pets);