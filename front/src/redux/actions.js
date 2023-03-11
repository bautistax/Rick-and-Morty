import axios from 'axios';
import  {ADD_CHARACTER, DELETE_CHARACTER,FILTER,ORDER} from './types.js';

export  function addCharacter (charac) {
    return async  function (dispatch){
        try {
            const character= await axios.post(`http://localhost:3001/rickandmorty/fav`, charac);
                dispatch({
                    type: ADD_CHARACTER,
                    payload: character.data,
                })
        } catch (error) {
            console.log(error);
        }    
    }     
};

export  function deleteCharacter(id) {
    return async function (dispatch){
        try {
            await axios.delete(`http://localhost:3001/rickandmorty/fav/:${id}`)
                dispatch({
                    type: DELETE_CHARACTER,
                    payload: id,
                })
        } catch (error) {
            console.log(error);
        }
    }    
};


export function getFavorites(){
    return async function (dispatch){
        try {
            const character= await axios.get(`http://localhost:3001/rickandmorty/fav`)
            return dispatch({
                type: "GET_FAVORITE",
                payload: character.data

            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function filterCards (status){
    return{
        type: FILTER,
        payload: status,
    }
};

export function orderCards (id){
    return{
        type:ORDER,
        payload:id,
    }
};