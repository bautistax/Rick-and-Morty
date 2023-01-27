import  {ADD_CHARACTER, DELETE_CHARACTER, FILTER,ORDER} from './types.js';

export  function addCharacter (fav) {
    return {
        type: ADD_CHARACTER,
        payload: fav,
    }
};

export  function deleteCharacter(id) {
    return {
        type: DELETE_CHARACTER,
        payload: id,
    }
};

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