import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {addCharacter, deleteCharacter} from '../../redux/actions.js';
import { connect } from 'react-redux';

export  function Card(props) {

   const [isFav, setIsFav]=useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         props.deleteCharacter(props.id)
      }else{
         setIsFav(true)
         props.addCharacter(props)
      }
   }

   useEffect(()=> {
      props.myFavorites?.forEach((fav)=>{
         if (fav.id === props.id){
            setIsFav(true);
         }
      });
   },[props.myFavorites]);


   return (
      <div className={style.card}>
         <div>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ): (
            <button onClick={handleFavorite}>🤍</button>
         )}
         </div>
         <button onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <h2>{props.status}</h2>
         <img  src={props.image} alt="img not found" />
      </div>
   );
}


export function  mapDispatchToProps(dispatch){
   return {
      addCharacter: function(fav) {
         dispatch(addCharacter(fav))
      },
      
      deleteCharacter: function(id){
         dispatch(deleteCharacter(id))
      }
   }
      
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);