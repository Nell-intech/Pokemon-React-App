// const pokeData = require('../models/pokemon')
const pokemons = require('../models/pokemon')
const PokeModel= require('../models/PokemonModel')

module.exports.index = async (req, res) => {
    // renders the pokemon index
    // res.render('pokeViews/Index', {pokemons:pokemons})

    try{
        const pokemon = await PokeModel.find()
        console.log('inside pokecontroller')
        res.render('pokeViews/Index', {pokemons:pokemon})
    }catch(error){
        console.log(error)
        res.send(error.message)
    }
}

module.exports.show = async (req,res) => {
// res.render('pokeViews/Show',{pokemon: pokemons[req.params.index] })
try{
    const pokemon = await PokeModel.findById(req.params.id)
    res.render('pokeViews/Show', {pokemon: pokemon })
}catch(error){
    console.log(error)
    res.send(error.message)
}
}

// // GET /pokemon/new
module.exports.new = (req, res) => {
    res.render('pokeViews/New')
}
// POST /pokemon
module.exports.create = async (req, res) => {

    try {
        // use the model to interact with db and create a new document in the fruit collection
        const result = await PokeModel.create(req.body)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
    
    res.redirect('/pokemon')
}
