var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

// *** GET all shows *** //
router.get('/meals', function(req, res, next) {
  queries.getAll()
  .then(function(meals){
    res.status(200).json(meals);
  })
  .catch(function(error){
    next(error)
  })
});


router.get('/meals/:id', (req, res, next) => {
  queries.getSingle(req.params.id)
  .then((meal)=> {
    res.status(200).json(meal)
  })
  .catch((error) =>{
    next(error)
  })
})

router.get('/sides/:id', function(req, res, next) {
  queries.getSides(req.params.id)
  .then(function(meal) {
    res.status(200).json(meal);
  })
  .catch(function(error) {
    next(error);
  });
});

router.get('/protein/:id', (req, res, next) => {
  queries.getProtein(req.params.id)
  .then((meal)=> {
    console.log("protein")
    res.status(200).json(meal)
  })
  .catch((error) => {
    console.log('doh!')
    next(error)
  })
})



module.exports = router;