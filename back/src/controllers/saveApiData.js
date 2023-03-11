const axios= require('axios');
const { Character } = require('../DB_connection');
//Esto es un controlador.
const getApiData= async ()=>{
    let i=1;
    let Characters= [];
    try {

        while (i<6) {
            const apiData= await axios(`https://rickandmortyapi.com/api/character/?page=${i}`);

            Characters.push(apiData);
            i++;
        }
        Characters= (await Promise.all(Characters)).map(el=>el.data.results.map(char =>{
            return({
                //Estas propiedades (id,name,status,ect.) son las que establecí en el modelo character.js(carpeta models).
                id:char.id,
                name:char.name,
                status:char.status,
                species:char.species,
                gender:char.gender,
                origin:char.origin.name,
                image:char.image,
            })
        }))
        let allCharacters= [];
        Characters.map(char => {allCharacters = allCharacters.concat(char)})

        return allCharacters;
       
    } catch (error) {
        return {error: error.message}
    }
}


const saveApiData= async ()=>{
    try {
        const allCharacters= await getApiData();
        await Character.bulkCreate(allCharacters);
        //bulkCreate nos permite pasarle un array de objetos y los crea todos juntos en la Base de Datos.
        return allCharacters;
    } catch (error) {
        return {error: error.message};
    }
}

module.exports={saveApiData};