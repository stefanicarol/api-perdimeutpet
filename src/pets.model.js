const mongoose = require('mongoose');

const Pets = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },     
    cat_breed: {
        id: {
            type: Number,
            required: false
        },
        cat_breed: {
            type: String,
            required: false
        },
    },
    color: {
        id: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: true
        },
    }, 
    gender:{
        id: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
    }, 
    dog_breed: {
        id: {
            type: Number,
            required: false
        },
        dog_breed: {
            type: String,
            required: false
        },
    }, 
    owner: {
        type: String,
        required: true
    }, 
    pelage: {
            id: {
                type: Number,
                required: true
            },
            pelage: {
                type: String,
                required: true
            },
    },
    size: {
        id: {
            type: Number,
            required: true
        },
        size: {
            type: String,
            required: true
        },
    },
    species: {
            id: {
                type: Number,
                required: true
            },
            species: {
                type: String,
                required: true
            },
    },
    status: { 
        type: Number,
        required: true 
    },
    photo: {
        type: String,
        required: true
   },   
    contact: {
        type: String,
        required: false
   },   
    city: {
        type: String,
        required: false
   },   
    observation: {
        type: String,
        required: false
   },  
    date: {
        type: String,
        required: false
   },   
},
{
    timestamps: true,
});

mongoose.model('pets', Pets);