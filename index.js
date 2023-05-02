const express = require('express')
const cors = require('cors')
const app = express()
const pokemonData = require('./pokemonData.json')

// Enable CORS for all routes
app.use(cors());

// Route returning all Pokemon
app.get('/pokemons', (req, res) => {
  const pokemonList = pokemonData.map(pokemon => ({
    id: pokemon.id,
    img: pokemon.img,
    name: pokemon.name,
    type: pokemon.type
  }))
  res.json(pokemonList)
})

// Route returning a specific Pokemon's details
app.get('/pokemons/:id', (req, res) => {
  const pokemonId = parseInt(req.params.id)
  const pokemon = pokemonData.find(pokemon => pokemon.id === pokemonId)
  if (pokemon) {
    res.json(pokemon)
  } else {
    res.status(404).json({ message: 'Pokemon not found' })
  }
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
