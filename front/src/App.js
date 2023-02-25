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
  const navigate = useNavigate();
  const location= useLocation();
  
  const username="bautistabauza@gmail.com";
  const password="ba060702";
  
  const [access,setAccess]=useState(false);

  const[characters,setCharacters]=useState([]);


  const login=(userdata)=>{
    if(userdata.username===username&&userdata.password===password){
      setAccess(true)
      navigate("/home");
    }else{
      alert("Ingreso no válido")
    }
    }


  useEffect(() => {
  !access && navigate('/');
  }, [access]);



//   const onSearch=async(character)=> {
//     console.log('onSearch');
//     try {
//       const result= await fetch(`http://localhost:3001/rickandmorty/character/${character}`)
//       const characterElemts=result.data
//              if (characterElemts.name) {
//                 setCharacters((oldChars) => [...oldChars, characterElemts]);
//               } else {
//                 window.alert('No hay personajes con ese ID');
//              }
//     } catch (error) {
//       console.log(error);
//     }
//  }


 function onSearch(character) {
  //web Server
  //fetch(`http://localhost:3001/rickandmorty/character/${character}`)
  //Promesas
  //fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
     //express
  fetch(`http://localhost:3001/rickandmorty/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
      //console.log(data)
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
         ///
         setCharacters(characters.filter(char=>char.id!==character))
         ///
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
