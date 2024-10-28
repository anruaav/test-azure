const {Router} = require('express')
const Product = require('../models/product')

const router = Router()

router.get('/', async (req, res) => {
    const products = await Product.findAll()
    console.log(products)

    res.render('products', {
        title: 'Товары',
        isProducts: true,
        products: products
    })
})

module.exports = router