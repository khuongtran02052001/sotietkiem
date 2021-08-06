const express = require('express')

const router = express.Router()

const argon2 = require('argon2')

const jwt = require('jsonwebtoken')

const User = require('../model/Users')






router.post('/register', async (req, res) => {
    const { username, password } = req.body
    console.log(req.body);
    if (!username || !password)
        return res.status(400).send({ success: false, message: 'missing username or password' })

    try {
        const user = await User.findOne({ username })
        if (user)
            return res.status(400).send({ success: true, message: 'username already in' })
        const hashedPassword = await argon2.hash(password)
        const newUser = new User({ username, password: hashedPassword })
        await newUser.save()
        const accessToken = jwt.sign({ userID: newUser._id }, process.env.ACCESS_TOKEN_SECRET)
        res.send({ success: true, message: 'User create succsessfully', accessToken })
    } catch (error) {
        console.log(error)
    }
})
router.post('/login', async (req, res) => {
    const { username, password } = req.body

    if (!username || !password)
        return res.status(400).send({ success: false, message: 'missing username or password' })
    try {//check username
        const user = await User.findOne({ username })
        if (!user) return res.status(400).send({ success: false, message: 'Incorrect username ' })
        //user found
        const passwordValid = await argon2.verify(user.password, password)
        if (!passwordValid) return res.status(400).send({ success: false, message: 'Incorrect password' })
        // //check role
        // const checkrole = await User.findOne({ role })
        // if (!checkrole) return res.status(400).send({ success: false, message: 'Incorrect role ' })
        //okay
        const accessToken = jwt.sign({ userID: user._id }, process.env.ACCESS_TOKEN_SECRET)
        res.send({ success: true, message: 'User  succsessfully', accessToken })
    } catch (error) {
        console.log(error)
    }
})








module.exports = router