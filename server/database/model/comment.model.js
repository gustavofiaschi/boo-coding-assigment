const { Schema, model } = require('mongoose');
//const Vote = require('./vote.model');

const commentSchema = new Schema({ 
    id: {
        type: Number,
        unique: true,
    }, 
    profileId: {
        type: Number
    }, 
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    vote: {
        type: { 
            id: {
                type: Number
            }, 
            mbti: {
                type: String,
                enum: ['INFP', 'INFJ', 'ENFP', 'ENFJ', 'INTP', 'INTJ', 'ENTP', 'ENTJ', 'ISFP', 'ISFJ', 'ESFP', 'ESFJ', 'ISTP', 'ISTJ', 'ESTP', 'ESTJ'],
                default: 'INFP',
            },
            enneagram: {
                type: String,
                enum: ['1w2', '2w3', '3w2', '3w4', '4w3', '4w5', '5w4', '5w6', '6w5', '6w7', '7w6', '7w8', '8w7', '8w9', '9w8', '9w1'],
                default: '1w2',
            },
            zodiac: {
                type: String,
                enum: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
                default: 'Aries',
            },      
        },        
    },
    likes: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('Comment', commentSchema);