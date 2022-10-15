const mongoose = require('mongoose');

const Characters = new mongoose.Schema({  
    cat_breed:
        [ 
            {    
                id: {
                    type: Number,
                    required: true
                },
                cat_breed: {
                    type: String,
                    required: true
                },
            }  
        ],
    dog_breed:
    [ 
        {    
            id: {
                type: Number,
                required: true
            },
            dog_breed: {
                type: String,
                required: true
            },
        }  
    ],
    color:
    [ 
        {    
            id: {
                type: Number,
                required: true
            },
            color: {
                type: String,
                required: true
            },
        }  
    ],
    gender:
    [ 
        {    
            id: {
                type: Number,
                required: true
            },
            gender: {
                type: String,
                required: true
            },
        }  
    ],
    pelage:
    [ 
        {    
            id: {
                type: Number,
                required: true
            },
            pelage: {
                type: String,
                required: true
            },
        }  
    ],
    size:
    [ 
        {    
            id: {
                type: Number,
                required: true
            },
            size: {
                type: String,
                required: true
            },
        }  
    ],
    species:
    [ 
        {    
            id: {
                type: Number,
                required: true
            },
            species: {
                type: String,
                required: true
            },
        }  
    ],
    status:
    [ 
        {    
            id: {
                type: Number,
                required: true
            },
            
        }  
    ],
},
{
    timestamps: true,
});

mongoose.model('characters', Characters);