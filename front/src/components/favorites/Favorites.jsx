import { useEffect } from "react";
import { connect } from "react-redux";
import Card from '../card/Card.jsx';
import { orderCards, getFavorites ,filterCards } from "../../redux/actions.js";
import { useDispatch } from "react-redux";
import style from "./Favorites.module.css";



export function Favorites ({ myFavorites }){
    
    useEffect(()=>{
        dispatch(getFavorites())
    },[]);
    
    const dispatch= useDispatch();

    const handleDispatch=(e)=>{
        const {name, value}=e.target;
        
        if(name==='order'){
            return dispatch(orderCards(value))
        }
        if(name==='filter'){
            return dispatch(filterCards(value))
        }
    }


    return(
        <div className={style.container}>

         <div className={style.filtros}>
            <select name="order" onClick={handleDispatch}>
                <option value='Ascendente'>Ascendente</option>
                <option value='Descendente'>Descendente</option>
            </select>
            <select name="filter" onClick={handleDispatch}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>unknown</option>
            </select>
         </div>
           <div className={style.content_cards}>
            {myFavorites?.map(fav => (
                <Card
                name={fav.name}
                id={fav.id}
                key={fav.id}
                gender={fav.gender}
                image={fav.image}
                />
            ))}

           </div>
            
        </div>
    )
}





export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)