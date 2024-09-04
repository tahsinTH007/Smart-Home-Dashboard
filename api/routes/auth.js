
const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
 
// Register
router.post('/register', async(req, res) => {
    try {
        // generate hashed password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        // create new user
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        console.log(newUser);

        // save new user and respond
        const user = await newUser.save();
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json(error)
    }

})

//login
router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user){
            return res.status(404).send('user not found')
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword){
            return res.status(400).send('Wrong password')
        }
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;