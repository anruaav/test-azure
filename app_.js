const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.get('', (req, res) => {
    var today = new Date()

    var html = '<h1>Мое приложение на NodeJS</h1> <p>'+today+'</p>';

    res.send(html)
    
})

app.listen(port)