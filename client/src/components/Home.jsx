import React, { Fragment } from "react";
import { useState,useEffect } from "react";
import{useDispatch,useSelector} from "react-redux"
import {getPokemons,FilterPokemonsByTypes,FilterPokemonsByOrigin, orderByName, orderByAttack} from '../actions'
import PokemonCard from "./PokemonCard.jsx";
import { Link } from "react-router-dom";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import  NavBar  from "./NavBar";
import '../hojas-de-estilo/Home.css'


export default function Home(){
    const dispatch = useDispatch()
    //dispatch(getPokemons())
    const allPokemons = useSelector ((state) => state.pokemons)
    console.log(allPokemons)
    const[orden,setOrden] = useState("")
     const [currentPage,setCurrentPage] = useState(1)
     const [pokemonPerPage,setPokemonPerPage] = useState(12)
     const indexOfLastPokemon = currentPage * pokemonPerPage
     const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
     const currentCharacter = allPokemons.slice(indexOfFirstPokemon,indexOfLastPokemon)
     const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
     }

     useEffect(() =>{
        dispatch(getPokemons())  // me trae todos los pokes del del estado
    },[dispatch]) 
       
    
           function handleFilterTypes(e){
            dispatch(FilterPokemonsByTypes(e.target.value)) 
           } 

           function handleFilterByOrigin(e){
            dispatch(FilterPokemonsByOrigin(e.target.value))
           }

           function handleSort(e){
            dispatch(orderByName(e.target.value))
            setCurrentPage(1)
            setOrden(`Ordenado ${e.target.value}`)
           }

           function handleAttackSort(e){
            dispatch(orderByAttack(e.target.value))
            setCurrentPage(1)
            setOrden(`Ordenado ${e.target.value}`)
           }
           
    
        return (
        <div>
          
          <div className="nav">
            <div className="new-container">
              <img style = {{width: "50px"}} src = "https://acceso.canalizados.com/wp-content/uploads/2021/05/57154655.jpeg" />
            </div>
            <div className="contenedor-filtros">
              <select onChange={e =>handleSort(e)}>
                <option value = 'asc'>A-Z</option>
                <option value = 'desc'>Z-A</option>
              </select>

              <select onChange ={e =>handleAttackSort(e)}>
                <option value = 'filter by attack'> Filtra por ataque</option>
                <option value = 'The lowest attack'>Menor ataque </option>
                <option value = 'The highest attack'>Mayor ataque </option>
              </select>
              <select onChange={e =>handleFilterTypes(e)}>
                <option value = 'Tipos'> Filtra por tipos </option>
                <option value ='normal'>Normal</option>
                <option value="fighting">Fighting</option>
                <option value="flying">Flying</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="rock">Rock</option>
                <option value="bug">Bug</option>
                <option value="ghost">Ghost</option>
                <option value="steel">Steel</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="psychic">Psychic</option>
                <option value="ice">Ice</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Dark</option>
                <option value="fairy">Fairy</option>
                <option value="unknown">Unknown</option>
                <option value="shadow">Shadow</option>
              </select>

              <select onChange={e =>handleFilterByOrigin(e)}>
                <option value = 'All'>Todos</option>
                <option value = 'created'>Creados</option>
                <option value = 'api'>Existentes</option>
              </select>
            </div>
            <div className="container-search-bar">
              <SearchBar/>
            </div>
          </div>
              
          
          
            <div className="container">
                  
              
                  
                  <Paginado
                pokemonPerPage={pokemonPerPage}
                allPokemons={allPokemons.length}
                paginado ={paginado}
                />

             
           {
            currentCharacter?.map(el=> {
                return ( 
                  <Link target = "_blank" to = {'/pokemons/'+ el.id}>                 
            <PokemonCard name={el.name} image ={el.img?el.img:el.image} types ={el.types} key = {el.id} />
                </Link> 
                    )  
                   }) 
                }   
               {allPokemons.length === 0 && <p>No hay pokemons disponibles</p>}
        </div>
        </div>
        )
    
}    
