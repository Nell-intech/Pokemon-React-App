//dotenv for privacy 
require('dotenv').config()
// requiring express to make express app
let express = require('express')

// Loading the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

let pokemonRoute = require('./routes/pokemonRoutes')
// storing the express fuction into a variable to begin our app
let app = express()
// app.use(express.static(__dirname+'/models/pokemon'));
const { createEngine } = require('jsx-view-engine')
// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

const methodOverride = require('method-override')

app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))

app.use(express.static('public'))

app.use((req,res,next)=> {
    console.log('inside middleware')
    console.log(`${req.method} ${req.path}`)     
    next()
})


// get route that sends a message
app.get('/',(req,res)=>{
    res.send('Welcome to my Pokemon App!')
})
//loading the poke data from my 'database' in models
let pokemon = require('./models/pokemon')  

// connecting the routes to out express app so when user goes to /pokemon the pae will go to pokemonRoute
app.use('/pokemon', pokemonRoute)

//show route
// app.get('/pokemon/:index',(req,res) =>{
//     res.send(pokemon[req.params.index])
// })


//begining the server for our app to listen for requests
app.listen(process.env.PORT,()=>{
    console.log('Listening on port ' + process.env.PORT + ' =-D ') // tells when your server is runningt
})
