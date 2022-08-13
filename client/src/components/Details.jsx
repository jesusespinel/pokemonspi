import React from "react";
import {useEffect } from "react";
import { Link,} from "react-router-dom";
import{useDispatch,useSelector} from "react-redux"
import { getDetail } from "../actions";

export function Details(props){
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getDetail(props.match.params.id))
}, [dispatch])

const pokeDetails = useSelector((state) => state.details)

     return (
            <div className="container">
         {
               pokeDetails.length>0?
       <div>
            <h1>{pokeDetails[0].name.charAt(0).toUpperCase() + pokeDetails[0].name.slice(1) }</h1>
            <img src={pokeDetails[0].img?pokeDetails[0].img:pokeDetails[0].imagen}/>
            <h3>Id:{pokeDetails[0].id} </h3>
            <h3>Attack:{pokeDetails[0].attack}</h3>
            <h3>Defense:{pokeDetails[0].defense}</h3>
            <h3>Speed:{pokeDetails[0].speed}</h3>
            <h3>Height:{pokeDetails[0].height}</h3>
            <h3>Weight:{pokeDetails[0].weight}</h3>
            <h3>Types:{!pokeDetails[0].createdInDb?pokeDetails[0].types+  " ": pokeDetails[0].types.map(el => el.name + (" "))}</h3>

                </div>: <p> Loading...</p>
             }
          <Link to ='/home'>
          <button className="volver"> Volver</button>
          </Link>

            </div>

     )



}


