const axios=require('axios');

const url='https://rickandmortyapi.com/api/character/';

const  getCharById=async(req, res)=>{
    try{
        const {id}=req.params;
        const result = await axios.get(`${url}${id}`)
        const characterElem = result.data
            let character={
                id:characterElem.id,
                name:characterElem.name,
                image:characterElem.image,
                gender:characterElem.gender,
                species:characterElem.species
            }
            res.status(200).json(character);
        }
        catch(error){
            res.status(500).json({message:error.message})
        }
}
    
    module.exports=getCharById;

// const getCharById =async (req, res) => {
//     const { id } = req.params;
//     try {
//        const result= await axios(`${url}${id}`);
//        const characterApi=result.data;
//             const character = {
//                 id: characterApi.id,
//                 image: characterApi.image,
//                 name: characterApi.name,
//                 gender: characterApi.gender,
//                 species: characterApi.species
//             }
//             console.log("datos enviados")
//             res.status(200).json(character);
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// }
