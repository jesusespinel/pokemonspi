const { Pokemon,Types} = require('../db')
const Router = require('express')
const router = Router()
const  getTotalData  = require('../Controllers/getDataApi.js')



router.get('/', async (req, res) => {
    const { name } = req.query
    const misPokes = await getTotalData()
    try {
        if (name) {
           
            //no avanza a la linea sin esperar la respuesta de la 11
            const pokeName =  misPokes.filter(poke => poke.name.toLowerCase() === name.toLowerCase())
            if (pokeName) {
                res.status(200).send(pokeName)
            }
        }
        res.status(200).send(misPokes)
    } catch (error) {
        //res.status(404).send("El pokemon no existe")
    }
}) 

/*router.get('/', async (req, res) => {
    const pokemon = await getTotalData()
    try {
        
        res.status(200).send(pokemon)

    } catch (error) {
       // res.status(404).send('No se encuentra el pokemon disponible')
       console.log(error)
    }

})  */

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const pokemon = await getTotalData()

    try {
        if(id){
        const pokeById =  pokemon.filter(poke => poke.id == id) 
        if(pokeById){
            res.status(200).json(pokeById)
        }
    }
    } catch (error) {
        res.status(404).send('No se encuentra el pokemon por id')
    }

    }) 
 
    router.post('/',async (req,res)=>{ // Ruta creación Pokemon

        const {image,name,life,attack,defense,speed,height,weight,types} = req.body
        try {
            const newPokemon = await Pokemon.create({
                name,
                life,
                attack,
                defense,
                height,
                weight,
                image,
                speed
            })  
              const typeDb =  await Types.findAll({
                where:{ name: types} // busca si el tipo de pk que pasa por body coincida con del body
              })
            newPokemon.addTypes(typeDb) // agrega con el que coincide en la db
        
            res.status(201).send('Pokemon creado correctamente')

        } catch (error) {
            console.log(error)
              res.status(404).send('Pokemon no creado exitosamente')
        }
    }) 


module.exports = router