var express = require('express');
var router = express.Router();


// *** GET all shows *** //
router.get('/meals', function(req, res, next) {
  res.send('send meals back');
});


module.exports = router;