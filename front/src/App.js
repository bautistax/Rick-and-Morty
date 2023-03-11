import { useState, useEffect } from 'react';
import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import Error from './components/errors/Error.jsx';




function App () {

  const location= useLocation();
  const[characters,setCharacters]=useState([]);
  
  
  //Seguridad del formulario.
  const [access,setAccess]=useState(true);
  const username="bautistabauza@gmail.com";
  const password="ba060702";
  const navigate = useNavigate();
  



  const login=(userdata)=>{
    if(userdata.username===username&&userdata.password===password){
      setAccess(true)
      navigate("/home");
    }else{
      alert("Ingreso no válido")
    }
    }

  //Este use efect no nos dejará navegar por la aplicación a menos que la información sea correcta.
  useEffect(() => {
  !access && navigate('/');
  }, [access]);


  //Edit del Back.
 function onSearch(character) {
     //express
  fetch(`http://localhost:3001/rickandmorty/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
      });
  setCharacters(characters.filter(char=>char.id!==character));
}

function random() {
  const num=Math.round(Math.random()*826)
  const number=num
  fetch(`https://rickandmortyapi.com/api/character/${number}`)
  .then((response) => response.json())
  .then((data) => {
     if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]); 
      }
    });
  setCharacters(characters.filter(char=>char.id!==number))
}

 const onClose= (id) =>{
  setCharacters(characters.filter(char=>char.id!==id))
 }

  return (
    <div className='App' style={{ padding: '25px' }}>
    
      {location.pathname !==  '/' ?  <Nav onSearch={onSearch} random={random}/>:null}
     
      <Routes>
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path='/' element={<Form login={login}/>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path='/detail/:detailId' element={<Detail />}></Route>
        <Route path='*' element={<Error/>}></Route>
        </Routes>
    </div>
  )
}

export default App
