const mongoose = require('mongoose')
const Schema = mongoose.Schema

const houseSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    }
    ,
    statusReady: {
        type:String,
        default: 'isReady'
    },
    tasks:{
        type: []
    },
    comments:{
      type: []
    },
    imgSrc: {
        type: String,
        default: ''
    },
    floors: {
        type: Number,
        require: true
    },
    personal: {
        type:[{
            type: String
        }]
    }
})

module.exports = mongoose.model('houses', houseSchema)