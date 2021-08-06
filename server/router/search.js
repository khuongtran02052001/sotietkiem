const express = require('express');
const router = express.Router()
const Passbook = require('../model/Passbook')

router.get('/search', async (req, res) => {
    // key word search
    const { ketqua } = req.query
    console.log(req.query)
    const id = await Passbook.find({ maso: ketqua })
    console.log(id)
    if (!id.length) return res.status(404).send({ success: false, message: 'ERORR' })

    try {

        res.send({ success: true, message: 'SUCCESSFULLY!!', id })

    } catch (error) {
        console.log(error)
    }
})

module.exports = router