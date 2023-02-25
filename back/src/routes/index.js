const { Router } = require("express");
const getCharById=require('../controllers/getCharById.js');
const getCharDetail=require('../controllers/getCharDetail.js');

const getFavorite=require('../controllers/getFavorite.js');
const postFavorite=require('../controllers/postFavorite.js');
const deleteFavorite=require('../controllers/deleteFavorite.js');

const router= Router();

router.get("/rickandmorty/character/:id",getCharById);
router.get('/rickandmorty/detail/:id',getCharDetail);
router.get('/rickandmorty/fav',getFavorite);
router.get('/rickandmorty/fav',postFavorite);
router.get('/rickandmorty/fav/:id',deleteFavorite);



module.exports={router};