const axios=require('axios');

const url='https://rickandmortyapi.com/api/character/';

const  getCharById=async(req, res)=>{
    const {id}=req.params;
    try{
        const result = await axios(`${url}${id}`);
        const characterElem = result.data;
            const character={
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

