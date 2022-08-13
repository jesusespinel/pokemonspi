import React from "react";
import { useState,useEffect } from "react";
import { Link,useHistory } from "react-router-dom";
import{useDispatch,useSelector} from "react-redux"
import{getTypes,postType} from '../actions/index'
import '../hojas-de-estilo/PokemonCreate.css'

function validate(input){
  let errors = {}
  if(!input.name){
    errors.name = 'El nombre debe ser completado'
  }
  return errors
}
export default function PokemonCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector((state) => state.types)
   
    const [errors,setErrors] = useState({});



        const [input,setInput] = useState({
            name:"",
            types :[],
            image: "",
            life: "",
            attack: "",
            defense: "",
            height: "",
            weight: ""
        })
       
        useEffect(() => {
          dispatch(getTypes());
        }, []);
      
          function handleInputChange(e){
            setInput({
              ...input,
              [e.target.name]:e.target.value
            })
            setErrors(validate({
              ...input,
              [e.target.name]:e.target.value
            }))
            console.log(input)
          }
          //guardo lo que el usuario escribe en el estado input y seteamos el estado
          //si modifica el target.name agarra el value asociado al input
          // e.taget value  toma los inputs y lo modifica el estado input dependiendod de lo que esta escrito
              function handleSelect(e){
                setInput({
                  ...input,
                 types: [...input.types,e.target.value]
                })
              }
                     //guarda en un array lo que se guarde en el select  cuando se hace click

                    function handleSubmit(e){
                      e.preventDefault()
                      dispatch(postType(input))
                      alert("personaje creado!!")
                      setInput({
                        name:"",
                        types :[],
                        image: "",
                        life: "",
                        attack: "",
                        defense: "",
                        height: "",
                        weight: ""
                      })
                      history.push('/home')
                    }

                function handleDelete(el){
                  setInput({
                    ...input,
                    types: input.types.filter(type =>type!== el)
                  })
                }
// filtrar por todos los tipoes que no coinciden con ese elemento
//devuelve las no clickeadas
// devuelve el estado nuevo sin elemento que yo clicklee
        return (
          <div className="container-poke-image">
          <div className="contenedor-principal-create">

                   <h1 className="title"> Crea tu personaje!!!</h1>
                   <form className= "form" onSubmit={handleSubmit}>
                   <div>
                    <label>Nombre: </label>
                    <input
                     type = "text"
                     value = {input.name}
                     name = "name"
                     onChange={handleInputChange}
                      />
                      {errors.name &&(
                        <p className="error">{errors.name}</p>
                      )}
                   </div>
                    <div>
                    <label>Image: </label>
                    <input
                     type = "text"
                     value = {input.image}
                     name = "image"
                     onChange={handleInputChange}
                      />
                    </div>
                    <div>
                    <label>Life:      </label>
                    <input
                     type = "number"
                     value = {input.life}
                     name = "life"
                     onChange={handleInputChange}
                      />
                    </div>
                    <div>
                    <label>Attack: </label>
                    <input
                     type = "number"
                     value = {input.attack}
                     name = "attack"
                     onChange={handleInputChange}
                      />
                    </div>
                    <div>
                    <label>Defense: </label>
                    <input
                     type = "number"
                     value = {input.defense}
                     name = "defense"
                     onChange={handleInputChange}
                      />
                    </div>
                    <div>
                    <label>Height:    </label>
                    <input
                     type = "number"
                     value = {input.height}
                     name = "height"
                     onChange={handleInputChange}
                      />
                    </div>
                    <div>
                    <label>Weight:     </label>
                    <input
                     type = "number"
                     value = {input.weight}
                     name = "weight"
                     onChange={handleInputChange}
                      />
                    </div>
               <select className="select" onChange={handleSelect}>
                    {types.map((e) => (
                            <option value={e.name}>{e.name}</option>
                      ))}
                </select>
                   <button className="botton" type= 'submit'>Crea un personaje!</button>
                   <ul><li>{input.types.map(el => el,",")}</li></ul>
                   <Link to = 'home'><button className="regresar">Regresar</button></Link>
                   </form>
                  {input.types.map(el=>
                    <div>
                      <p> {el}</p>
                      <button className="botonX" onClick={()=>handleDelete(el)}>X</button>
                    </div>
                    
                    )}
                    

          </div>

          </div>
        )
      
        
     }