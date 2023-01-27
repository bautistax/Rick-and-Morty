import React from "react";
import SearchBar from "../searchbar/SearchBar";
import styled from 'styled-components'
import { Link } from "react-router-dom";

 const Div=styled.div`
 background-color:#48C9B0;
 border-radius:8px;
 padding:10px;
 margin:0;
 text-align:right;
 `;

export default function Nav(props){
    return(
        <Div>
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
            <SearchBar onSearch={props.onSearch} />
        </Div>
    )
}