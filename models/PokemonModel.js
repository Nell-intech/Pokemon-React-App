// pokemon mondel for database
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pokeSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    // shipIsBroken: {type: Boolean, required: true},
    // ts: {type: String, required: true},
})

//model is creaed using the schema and exported
const Pokemon = mongoose.model('pokemon', pokeSchema)

module.exports = Pokemon