const express = require('express');
const router = express.Router();


 
router.get('/', function (req, res) {
  res.json({
    "result": {
      "updated": "2018-12-15T02:58:29",
      "source": "BRL",
      "target": "ARS",
      "value": 9.73729,
      "quantity": 1.0,
      "amount": 9.73729
    },
    "status": "OK"
  })
  });


module.exports = router;