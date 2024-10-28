const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const sequelize = require('./utils/database')

const homeRouter = require('./routes/home')
const aboutRouter = require('./routes/about')
const productsRouter = require('./routes/products')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
  })

  app.engine('hbs', hbs.engine)
  app.set('view engine', 'hbs')
  app.set('views', 'views')

  app.use(express.static('public'))

  app.use('/', homeRouter)
  app.use('/about', aboutRouter)
  app.use('/products', productsRouter) 

/* 
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views0', 'index.html'))
    res.render('index', {
        title: 'Главная страница',
        isHome: true
    })
})

app.get('/about', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views0', 'about.html'))
    res.render('about', {
        title: 'О нас',
        isAbout: true
    })
})

app.get('/products', (req, res) => {
    res.render('products', {
        title: 'Товары',
        isProducts: true
    })
}) */

const PORT = process.env.PORT || 80

/* app.listen(PORT, () => {
    console.log('Server is running on port '+ PORT)
}) */

async function start() {
    try {
      await sequelize.sync()
      app.listen(PORT)
    } catch (e) {
      console.log(e)
    }
  }
  
  start()