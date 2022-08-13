
const  axios = require('axios').default;
const{Pokemon,Types} = require( '../db')
const getDataApi = async () =>{
    // guardo todas las caracteristicas de los pk 
    try {
     const pokeApi = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40")
      const pokeInfo = pokeApi.data.results.map(p => axios.get(p.url)) //[array de promesas]
      const pokeResponse =  await axios.all(pokeInfo)
      .then (pokes =>
        pokes.map(p => {
            const allPoke={
                id: p.data.id,
                name: p.data.name,
                hp: p.data.stats[0].base_stat,
                attack: p.data.stats[1].base_stat,
                defense: p.data.stats[2].base_stat,
                speed: p.data.stats[5].base_stat,
                height: p.data.height,
                weight: p.data.weight,
                types: p.data.types.map(t=>t.type.name),
                img: p.data.sprites.other.home.front_default,
            }
            return allPoke;
        }))
        
        return pokeResponse;
     }  catch (error) {
            console.log(error)
    } 
    }
    //TRAERME TODO LO DE LA TABLA POKEMON, INCLUIDA LA RELACION CON TYPE
    const getPokeDb = async() =>{
       try {
        const pokeDb = await Pokemon.findAll({
            include:{
                model: Types,
                attribute:['name'],
                through:{
                    attributes: [],
                }
            }
        })
        var dato = JSON.parse(JSON.stringify(pokeDb, null, 2))
         //[{},{},{}]
      dato.forEach(poke=> poke.types = poke.types.map(type=> type.name))

        return dato
       } catch (error) {
        console.log(error)
       }
    }

    const getTotalData  = async() =>{
        const apiInfo =  await getDataApi()
        const dbInfo =  await getPokeDb()
        const infoTotal = apiInfo.concat(dbInfo)
        console.log(infoTotal)
        return infoTotal
    }
      

    


module.exports=  getTotalData;
