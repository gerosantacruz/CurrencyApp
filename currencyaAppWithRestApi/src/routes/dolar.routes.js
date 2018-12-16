const express = require('express');
const router = express.Router();


 
router.get('/', function (req, res) {
  res.json({

    "result": {
      "updated": "2018-12-14T23:00:00",
      "source": "USD",
      "target": "ARS",
      "value": 38.139,
      "quantity": 1.0,
      "amount": 38.139
    },
    "status": "OK"
  })
  });
    





module.exports = router;