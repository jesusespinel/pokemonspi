import React from "react";
import '../hojas-de-estilo/pokemonCards.css'

export default function PokemonCard({name,image,types,}){
 return (
    <div className="cards">
         {//let typesCheck = typeof types[0] === 'object'? types.map(t=>t.name) : types
}
     <h1 className="names">
        {name.charAt(0).toUpperCase()+ name.slice(1)} 
     </h1>
     <h5 className="type">
      {types.map(type=>(<p>{type}</p>))}
     
    </h5> 
     <img  src = {image} alt = "image not found" className="image"  width = '120px'    heigth = '100px' />

   </div>




 )
}