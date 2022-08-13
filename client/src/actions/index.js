import axios from "axios"

/*export function getPokemons(){
    return async function(dispatch){
        var json =  await axios.get("http://localhost:3001/pokemon")
        console.log(json)
    return dispatch({
        type:"GET_POKEMONS",
         payload: json.data
    })

    }
} */

export const getPokemons = ()=>(dispatch) =>{
    return fetch("http://localhost:3001/pokemon")
    .then((r) => r.json())
    .then((data) => dispatch({ type: 'GET_POKEMONS', payload: data }));
};

export function getNamePokemons(name){
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/pokemon?name="+ name)
            return dispatch({
                type: "GET_NAME_POKEMONS",
                payload:  json.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}

export function FilterPokemonsByTypes(payload){
    console.log(payload)
    return {
        type: "FILTER_POKEMONS_BY_TYPES",
        payload
    }
}

export function FilterPokemonsByOrigin(payload){
return {
type: "FILTER_BY_ORIGIN",
payload
}
}

export function orderByName(payload){
return {
    type: "SORT_NAME",
    payload
}
}

export function orderByAttack(payload){
    return{
        type: "SORT_ATTACK",
        payload
    }
}

export function getTypes(){
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/types")
            return dispatch({
                type: "GET_TYPES",
                payload:  json.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}

export function postType(payload){
    return async function(dispatch){  
const response = await axios.post("http://localhost:3001/pokemon",payload)
console.log(response)
return response
    }
}


export function getDetail(id){
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/pokemon/" +id)
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data
            })
        } catch (error) {
            console.log(error)
            
        }
    }
}
//por payload me llegan todos los values del type del select