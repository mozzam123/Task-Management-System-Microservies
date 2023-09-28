const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.send("Mozzam")
})



module.exports = app