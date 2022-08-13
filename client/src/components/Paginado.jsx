import React from "react";

export default function Paginado({ pokemonPerPage,allPokemons,paginado}){
    console.log(pokemonPerPage,allPokemons,paginado)
    const pageNumbers = []

    for (let i= 1; i<=Math.ceil(allPokemons/pokemonPerPage);i++) {
        pageNumbers.push(i)

    }

        return(
            <nav>
                  
                             <ul className="paginado">
                           {
                                  pageNumbers && 
                                  pageNumbers.map(number =>(
                                    <li className= 'number ' key ={number}>
                                <button onClick ={() => paginado(number)}>{number} </button>
                                   </li> 
                                  ))

                                }

                             </ul>

            </nav>
        )
    }
