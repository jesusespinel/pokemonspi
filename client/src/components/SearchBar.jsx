import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../actions";
import '../hojas-de-estilo/SearchBar.css'

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name,setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNamePokemons(name))
// name es mi estado local que guarda lo que tipea el usuario y
 //lo que yo tengo en mi estado local name y le 
 //llega a la accion que le pasa lo que el user escribe
    }
    
    return (

               <div>

                <input className="searchbar"
                type = "text"
                placeholder = "Buscar Pokemon..."
                onChange={(e)=>handleInputChange(e)}
                />
                <button className="boton" type = "submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
                         
              </div>

    )
}