const favs=require('../utils/favs.js');

const postFvaorite=(req,res)=>{
    const { character }=req.body;

    if(character){
        favs.push(character)
        return res.status(200).json('Character created succesfully')
    }
}

module.exports=postFvaorite;