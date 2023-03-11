import { ADD_CHARACTER, DELETE_CHARACTER,FILTER, ORDER } from "./types";


const initialState = {
    myFavorites:[],
    allCharacters:[],
};

const rootReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case ADD_CHARACTER:
            return{
                ...state,
                myFavorites: [...state.allCharacters,payload],
                allCharacters: [...state.allCharacters,payload],
            }
        case DELETE_CHARACTER:
            const idFilter = state.myFavorites.filter(fav => fav.id !== payload)
            return{
                ...state,
                allCharacters: idFilter,
                myFavorites: idFilter,
            }
            case FILTER:
                const copyFilter= [...state.allCharacters];
                const filter= copyFilter.filter(char=>char.gender===payload)
                return{
                    ...state,
                    myFavorites:filter,
                }
                case ORDER:
                    const orderCopy=[...state.allCharacters];
                    const order=orderCopy.sort((a,b)=>{
                        if(a.id>b.id){
                            return payload=== "Ascendente" ? 1 : -1
                        }
                        if(a.id<b.id){
                            return payload === "Ascendente" ? -1 : 1
                        }
                        else return 0
                    });
                    return {
                        ...state,
                        myFavorites: order
                    };
                case "GET_FAVORITE":
                       
                    return{
                            ...state,
                            myFavorites:payload
                 };
            default:
                return state;

    }
}

export default rootReducer;