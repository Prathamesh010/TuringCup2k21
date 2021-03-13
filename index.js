const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, (err) => {
    if(err) console.log(err)
    console.log(`Server Listening on Port ${PORT}...`)
})