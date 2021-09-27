var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author:'Mitzi Sanchez',appName:'web',
   company:'Awsome Software' });


});

/*Agregando una nueva ruta*/ 
router.get('/greeting',function(req, res, next){
res.status(200).json({message: 'prueba dos'})
});


/*Reto*/

router.get('/new',function(req, res, next){
  res.status(200).json({message: 'Reto cumplido'})
});


module.exports = router;
