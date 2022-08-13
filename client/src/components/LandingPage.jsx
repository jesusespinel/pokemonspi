import React from "react";
import {Link} from "react-router-dom"
import PokePortada from '../imagenes/pokemones.jpg'
import'../hojas-de-estilo/LandingPage.css'


export default function LandingPage(){
    return(
        <div className="landing-page">
            <Link to= '/home'> 


           {/* <img src = {PokePortada} alt = "image not found" className="image-contenedor" /> */}

            <button className="button">INGRESAR</button>
            </Link>
        </div>
    )
}