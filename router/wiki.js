const express = require('express')
const {addPage} = require ('../views')
const {Page} = require('../models')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send("got to GET /wiki/")
});

router.post('/',  async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content
    })
    res.redirect('/')
  } catch (error) { next(error) }
});


router.get('/add', (req, res, next) => {
    res.send(addPage())
});



module.exports = router;
