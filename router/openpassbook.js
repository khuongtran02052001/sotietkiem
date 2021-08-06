const express = require('express')
const Passbook = require('../model/Passbook')

const router = express.Router()

router.post('/passbook', async (req, res) => {
    const { maso, sotiendagui, loaitietkiem, ngaymo, tenkhachhang, CMND, diachi, } = req.body
    console.log(req.body)
    try {
        const ID = await Passbook.findOne({ maso })
        if (ID) return res.status(200).send({ success: true, message: 'ID already in' })
        const newPassbook = new Passbook({ maso, sotiendagui, loaitietkiem, ngaymo, tenkhachhang, CMND, diachi })
        await newPassbook.save()
        res.send({ success: true, message: 'Passbook create succsessfully' })
    } catch (error) {
        console.log(error)
    }

})

module.exports = router