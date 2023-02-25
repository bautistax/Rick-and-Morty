const favs= require('../utils/favs.js');

const getFavorite=(req,res)=>{
    res.status(200).json(favs)
}

// const getFavorite=async(req,res)=>{
//     try {
//         const fav= await fav.findAll();
//         res.status(200).json(favs)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }

module.exports=getFavorite;