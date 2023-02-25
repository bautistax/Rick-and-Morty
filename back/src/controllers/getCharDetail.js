const axios=require('axios');


const url='https://rickandmortyapi.com/api/character/';

const  getCharDetail=async(req, res)=>{
    try{
        const {id}=req.params;
        const result= await axios.get(`${url}${id}`)
        const characterDetails=result.data
            let character={
                id:characterDetails.id,
                name:characterDetails.name,
                image:characterDetails.image,
                gender:characterDetails.gender,
                species:characterDetails.species,
                origin:characterDetails.origin
            };
         res.status(200).json(character);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports=getCharDetail;