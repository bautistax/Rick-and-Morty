import React from "react";
import SearchBar from "../searchbar/SearchBar";
// import styled from 'styled-components'
import styles from './Nav.module.css';
import { Link } from "react-router-dom";

//  const Div=styled.div`
//  background-color:#48C9B0;
//  border-radius:8px;
//  padding:10px;
//  margin:0;
//  text-align:right;
//  `;

export default function Nav(props){
    return(
        <div className={styles.nav}>
            <Link to='/home' className={styles.link}>Home</Link>
            <Link to='/favorites' className={styles.link}>Favorites</Link>
            <Link to='/about' className={styles.link}>About</Link>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}