const axios=require('axios');


const url='https://rickandmortyapi.com/api/character/';

const  getCharDetail=async(req, res)=>{
    const {id}=req.params;
    try{
        const result= await axios(`${url}${id}`)
        const characterDetails=result.data
            const detailsCharacter={
                id:characterDetails.id,
                image:characterDetails.image,
                name:characterDetails.name,
                gender:characterDetails.gender,
                species:characterDetails.species,
                origin:characterDetails.origin
            };
         res.status(200).json(detailsCharacter);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports=getCharDetail;
