const express = require('express')
const router = express.Router()
const superagent = require('superagent');
const apiKey = 'NGndxGqMBy3xc3bCQhpHq7H5sVfwymGX'


router.get('/:lat/:lon', async (req, res) => {
  try {
    const response = await superagent.get(`https://api.tomtom.com/search/2/nearbySearch/.json?limit=12&key=${apiKey}&lat=${req.params.lat}&lon=${req.params.lon}`)
    if (response.statusCode === 200) {
      return res.json(response.body.results);
    }
  } catch (error) {
    return res.status(400).json(error)
  }

})

module.exports = router

