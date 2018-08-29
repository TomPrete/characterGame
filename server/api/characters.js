const router = require('express').Router()
const Characters = require('../data/characters')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    res.json(Characters)
  } catch (err) {
    next(err)
  }
})


router.get('/:char_type', async (req, res, next) => {
  let char_type = req.params.char_type
  try {
    let stats = Characters[char_type]
    res.json(stats)
  } catch (err) {
    console.log("ERROR")
    next(err)
  }
})
