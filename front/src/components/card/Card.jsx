import { Link } from 'react-router-dom';
import style from './Card.module.css';
import { useState, useEffect } from 'react';
import {addCharacter, deleteCharacter} from '../../redux/actions.js';
import { connect } from 'react-redux';

export  function Card(props) {

   const [isFav, setIsFav]=useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         props.deleteCharacter(props.id);
      }else{
         setIsFav(true);
         const character = {
            key:props.id,
            id: props.id,
            name: props.name,
            image: props.image,
            species: props.species,
            gender: props.gender,
          };
         props.addCharacter(character)
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
         <div
         style={{
          display: "flex",
          justifyContent: "flex-start",
          position: "absolute",
         }}
         >

         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ): (
            <button onClick={handleFavorite}>🤍</button>
         )}
         </div>

         <button onClick={props.onClose} className={style.close}>
         <span className={style.x}>X</span>
         </button>

         <img  src={props.image} alt={props.name} />

         <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
         <h4 className={style.name}>{props.name}</h4>
         </Link>
         <div className={style.content_span}>
         <span>{props.species}</span>
         <span>{props.gender}</span>
         </div>
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