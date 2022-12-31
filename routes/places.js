const express = require('express')
const router = express.Router()
const superagent = require('superagent');
const apiKey = 'NGndxGqMBy3xc3bCQhpHq7H5sVfwymGX'

router.get('/:lat/:lon/:page', async (req, res) => {
  try {
    const response = await superagent.get(`https://api.tomtom.com/search/2/nearbySearch/.json?limit=100&key=${apiKey}&lat=${req.params.lat}&lon=${req.params.lon}`)
    if (response.statusCode === 200) {
      let arrayOfPlaces = response.body.results
      switch (req.params.page) {
        case '1':
          arrayOfPlaces = arrayOfPlaces.slice(0, 10)
          break
        case '2':
          arrayOfPlaces = arrayOfPlaces.slice(10, 20)
          break
        case '3':
          arrayOfPlaces = arrayOfPlaces.slice(20, 30)
          break
        case '4':
          arrayOfPlaces = arrayOfPlaces.slice(30, 40)
          break
        case '5':
          arrayOfPlaces = arrayOfPlaces.slice(40, 50)
        default:
          break
      }
      return res.json(arrayOfPlaces)
    }
  } catch (error) {
    return res.status(400).json(error)
  }

})

module.exports = router

