import React from "react";
import style from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {Link} from 'react-router-dom';

export default function Detail(){
    const {detailId}= useParams();

    const [character,setCharacter]=useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    
    
    return(
      
    <div className={style.container}>
       <Link to={'/home'}>
        <button>Home</button>
        </Link>
      <div className={style.contain}> 
      <div className={style.contain_img}>
       <img src={character.image}alt="not found" />
      </div>
     
       
        <div className={style.card}>
        <h1>{character.name}</h1>

        <div className={style.h5}>
        <h5>{character.status}</h5>
        <h5>{character.species}</h5>
        <h5>{character.gender}</h5>
        <h5>{character.origin?.name}</h5>
        </div>
       
      </div>
    </div>
    </div>
);
}
