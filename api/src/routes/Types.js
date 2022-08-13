const {Types} = require ('../db')
const Router = require('express')
const  axios = require('axios').default;
const router = Router()

//LLAMADO A LOS TYPES DE LA API//
const dataTypePoke = async () =>{
const typeApiPoke =  await axios.get("https://pokeapi.co/api/v2/type") 
 //console.log(typeApiPoke.data.results)
 const name = typeApiPoke.data.results.map(e=> e.name)

for (let i = 0; i < name.length; i++) {
   console.log(name[i])
    Types.findOrCreate({
        where:{
            name: name[i]
        }
    })
}
}

router.get('/', async (req, res,)=>{
   try {
    await dataTypePoke()
     const allTipos = await Types.findAll()
  res.status(200).send(allTipos)
    
   } catch (error) {
    res.status(404).send('Error en la busqueda')
   }





   
}) 


module.exports = router