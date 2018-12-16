const express = require('express');
const router = express.Router();


 
router.get('/', function (req, res) {
  res.json({
    "result": {
      "updated": "2018-12-14T22:30:00",
      "source": "EUR",
      "target": "ARS",
      "value": 43.13879,
      "quantity": 1.0,
      "amount": 43.13879
    },
    "status": "OK"
  })
  });


module.exports = router;