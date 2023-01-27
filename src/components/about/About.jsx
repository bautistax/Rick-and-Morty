import React from "react";
import styles from "./About.module.css";


export default function About (){
    return(
    <div>
        <h1 className={styles.about}>Bienvenidos a la Aplicación de Rick & Morty</h1>
        <h3 className={styles.h3}>Aplicación creada por: Bautista Bauzá</h3>
    </div>
    )
}