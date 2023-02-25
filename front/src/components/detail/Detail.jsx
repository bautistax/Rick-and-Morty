import React from "react";
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
    <div>
        <Link to={'/home'}>
        <button>Home</button>
        </Link>
        <h1>{character.name}</h1>
        <h5>{character.status}</h5>
        <h5>{character.specie}</h5>
        <h5>{character.gender}</h5>
        <h5>{character.origin?.name}</h5>
        <img src={character.image}alt="not found" />
    
       
    </div>
);
}
