const mongoose = require('mongoose');

const Characters = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    elements:
        [
            {    
                id: {
                    type: Number,
                    required: true
                },
                value: {
                    type: String,
                    required: true
                },}
        ],
    

},
{
    timestamps: true,
});

mongoose.model('characters', Characters);