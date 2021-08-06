const express = require('express')
const Depositslip = require('../model/Depositslip')
const Passbook = require('../model/Passbook')
const router = express.Router()
router.post('/depositslip', async (req, res) => {
    const { ngaygui, sotiendagui, tenkhachhang, maso } = req.body
    const id = await Depositslip.findOne({ maso })
    console.log(req.body)
    if (!id) res.status(400).send({ success: false, message: 'ERR!!' })
    try {
        const newDepositslip = new Depositslip({ ngaygui, sotiendagui, tenkhachhang, maso })
        newDepositslip.save()
        const pb = await Passbook.findOne({ maso })
        let updated = { sotiendagui: Number(pb.sotiendagui) + Number(sotiendagui) }
        // let updated = { sotiendagui: (pb.sotiendagui + sotiendagui) }
        updated = await Passbook.findOneAndUpdate({ maso }, updated, { new: true })
        res.send({ success: true, message: 'Depositslip create succsessfully' })
    } catch (error) {
        console.log(error)
    }
})
module.exports = router