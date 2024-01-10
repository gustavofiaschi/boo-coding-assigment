const { Schema, model } = require('mongoose');

const profileSchema = new Schema({ 
    id: {
        type: Number,
        unique: true,
    }, 
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    mbti: {
        type: String,
        trim: true,
        uppercase: true,
    },
    enneagram: {
        type: String,
        trim: true,
    },
    enneagram: {
        type: String,
        trim: true,
    },    
    variant: {
        type: String,
        trim: true,
        default: 'sp/so',
      },
    tritype: {
        type: Number
    },
    socionics: {
        type: String,
        trim: true,
        uppercase: true,
    }, 
    sloan: {
        type: String,
        trim: true,
        uppercase: true,
    }, 
    psyche: {
        type: String,
        trim: true,
        uppercase: true,
    },           
    image: {
        type: 'String',
        default: 'https://soulverse.boo.world/images/1.png',
    },
  
});

module.exports = model('Profile', profileSchema);