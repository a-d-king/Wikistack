const express = require('express')
const {addPage} = require ('../views')

const router = express.Router()


router.get('/', (req, res, next) => {
    res.send("got to GET /wiki/")
});


router.post('/', (req, res, next) => {
  console.log(res.json(req.body))

  res.send(res.json(req.body))
});


router.get('/add', (req, res, next) => {
    res.send(addPage())
});



module.exports = router;
