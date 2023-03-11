// const favs=require('../utils/favs.js');

// const postFavorite=(req,res)=>{
//     const  character = req.body;

//     if(character){
//         let exists=favs.find(cur=>cur.id===character.id);
//         if(!exists){
//             favs.push(character)
//             return res.status(200).json(character)
//         }
//     }
//     return res.status(400).json("Ya existe este chart");
// }

// module.exports=postFavorite;

const { Favorite } = require('../DB_connection');
​
const postFavorite = async (req, res) => {
    try {
        const { id, name, status, species, gender, origin, image } = req.body;
        if(!id || !name || !status || !species || !gender || !origin || !image) return res.status(404).json({message: 'Complete all fields'})
​
        const favorite = await Favorite.create({
            id,
            name,
            status,
            species,
            gender,
            origin,
            image
        })
        return res.status(200).json(favorite)
​
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}
​
module.exports = postFavorite;