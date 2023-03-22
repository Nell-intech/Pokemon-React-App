// serve the index.jsx file created to display your pokemon

const express = require('express')

//creating the router for this route
const router = express.Router()

//loading the controller and its route
const pokeRouter  = require('../controllers/pokeControllers')

// when user goes to localhost:3000/pokemon the pokemon data should populate the page as json
// router.get('/pokemon',(req,res)=>{res.send(pokemon) // change to serve index.jsx from controller
// })

//setting up an index route 
router.get('/',pokeRouter.index)

// Setup a "new" route for creating pokemon
router.get('/new', pokeRouter.new)

//setting up an create route 
router.post('/',pokeRouter.create)

// setting up the show route
router.get('/:id',pokeRouter.show)





module.exports = router

