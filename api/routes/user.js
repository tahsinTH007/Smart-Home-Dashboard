const router = require('express').Router()


router.get('/', (req, res) => {
    res.send('hey it user route')
})

module.exports = router;