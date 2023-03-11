import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {

   const {onSearch,random}=props;
   const[character,setCharacter]=useState("");

   const handleChange= (e)=>{
      const {value} = e.target;
      console.log(value)
      setCharacter(value)
   }

   const handleSubmit=(e)=>{
      e.preventDefault()
   }
   return (
      <div className={styles.bar}>
      
         <form  onSubmit={handleSubmit}>
          <input type='search'  value={character} placeholder='Search...'  onChange={handleChange}/>
         </form>
          <button className={styles.btn} onClick={() => {onSearch(character)}}>Add Character</button>
         <button className={styles.random} onClick={random} >Random</button>


      </div>



   );
}
