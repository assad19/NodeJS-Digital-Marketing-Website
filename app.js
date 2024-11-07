const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/#about', (req, res) => {
  res.render('index')
})

app.get('/#services', (req, res) => {
  res.render('index')
})

app.get('/#portfolio', (req, res) => {
  res.render('index')
})

app.get('/#blog', (req, res) => {
  res.render('index')
})

app.get('/#contact', (req, res) => {
  res.render('index')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})