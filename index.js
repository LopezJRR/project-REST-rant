const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Rate the Restaurant!')
})

app.listen(3000, () => {console.log('Getting ready to rate!')})