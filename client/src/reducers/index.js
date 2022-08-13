
   const initialState = {
   pokemons: [],
   allPokemons: [],
   types:[],
   details: []
}
function rootReducer(state = initialState,action){
    switch(action.type){
        case "GET_POKEMONS":
        return{ 
              ...state,
              pokemons:action.payload,
            allPokemons: action.payload
              
        }
        case "GET_NAME_POKEMONS":
        return{ 
              ...state,
              pokemons:action.payload  
        }
        case "GET_TYPES":
        return{ 
              ...state,
              types:action.payload,
        }
        
        case "GET_DETAILS":
          return{ 
                ...state,
                details: action.payload
          }
     case "FILTER_POKEMONS_BY_TYPES":
      const allPoke = state.allPokemons // guardo en una constante todos los pokes de mi estado
      const filterType = action.payload === "Tipos"? allPoke: allPoke.filter(poke => poke.types.join(' ').includes(action.payload))
        return {
              ...state,
              pokemons: filterType
        }  
      case "FILTER_BY_ORIGIN":
      
        const filteredOrigin = action.payload === "created"? state.allPokemons.filter(poke => poke.createdInDb): state.allPokemons.filter(poke => !poke.createdInDb)
        return{
         ...state,
         pokemons: filteredOrigin
        }

        case "SORT_NAME":
        const sortName = action.payload === "asc"? state.allPokemons.sort(function(a,b){
           if(a.name > b.name){
            return 1
           }
           if(b.name > a.name){
            return -1
           }
           return 0
        }):
        state.allPokemons.sort(function(a,b){
          if(a.name > b.name){
            return -1
           }
           if(b.name > a.name){
            return 1
           }
           return 0
        })
        return {
          ...state,
          allPokemons:sortName
          }

         case "SORT_ATTACK":
          const sortAttack = action.payload === "The lowest attack"?state.allPokemons.sort(function(a,b){
            if(a.attack > b.attack){
              return 1
             }
             if(b.attack > a.attack){
              return -1
             }
             return 0
          }):
          state.allPokemons.sort(function(a,b){
            if(a.attack > b.attack){
              return -1
             }
             if(b.attack > a.attack){
              return 1
             }
             return 0
          })
          return {
            ...state,
            allPokemons:sortAttack
            }

    default: 
           return {...state};
   }
    
}  


  
  




export default  rootReducer;