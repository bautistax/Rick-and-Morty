import { useState } from 'react';
import styles from './SearchBar.module.css';
export default function SearchBar(props) {
  

   const[character,setCharacter]=useState("");

   const handleChange= (e)=>{
      const {value} = e.target;
      console.log(value)
      setCharacter(value)
   }
   return (
      <div className={styles.bar}>
      <input type='search' placeholder='Search...'  onChange={handleChange}/>
      <button className={styles.btn} onClick={() => props.onSearch(character)}>Add Character</button>
      </div>

   );
}
