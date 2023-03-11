import React from "react";
import SearchBar from "../searchbar/SearchBar";
import styles from './Nav.module.css';
import { Link } from "react-router-dom";


export default function Nav({ onSearch, random }){
    return(
        <div className={styles.nav}>
            <Link to='/home' className={styles.link}>Home</Link>
            <Link to='/favorites' className={styles.link}>Favorites</Link>
            <Link to='/about' className={styles.link}>About</Link>
            <SearchBar onSearch={onSearch} random={random}/>
        </div>
    );
}