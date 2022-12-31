const helmet = require('helmet')
const express = require('express')
const app = express()
const places = require('./routes/places')

app.use(express.json())
app.use(helmet())
app.use('/api/places', places)


const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port :: ${port}`))