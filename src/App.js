import { useState, useEffect } from 'react';
import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx';



function App () {
  const location= useLocation();
  const navigate=useNavigate();
  
  const username="bautistabauza@gmail.com";
  const password="ba060702";
  
  const [access,setAccess]=useState(false);

  const[characters,setCharacters]=useState([]);


  const login=(userdata)=>{
    if(userdata.username===username&&userdata.password===password){
      setAccess(true)
      navigate("/home");
    }else{
      alert("no kapo")
    }
    }
 useEffect(() => {
  !access && navigate('/');
}, [access]);



  const onSearch=(character)=> {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
           } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }


 const onClose= (id) =>{
  setCharacters(characters.filter(char=>char.id!==id))
 }

  return (
    <div className='App' style={{ padding: '25px' }}>
    <div>
      {location.pathname !==  '/' && <Nav onSearch={onSearch} />}
     </div>
     
      <Routes>
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path='/' element={<Form login={login}/>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/home' element={<Cards
          characters={characters}
          onClose={onClose}
          />}></Route>
        <Route path='/detail/:detailId' element={<Detail />}></Route>
        </Routes>
    </div>
  )
}

export default App
