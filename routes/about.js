const {Router} = require('express')

const router = Router()

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views0', 'about.html'))
    res.render('about', {
        title: 'О нас',
        isAbout: true
    })
})

module.exports = router