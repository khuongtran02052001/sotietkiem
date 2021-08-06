const express = require('express');
const Withdrawalslip = require('../model/Withdrawalslip')
const Passbook = require('../model/Passbook')
const router = express.Router();
router.post('/withdrawalslip', async (req, res) => {
    const { tenkhachhang, sotienrut, maso, ngayrut } = req.body;
    const id = await Withdrawalslip.findOne({ maso })
    console.log(req.body)
    if (!id) res.status(400).send({ success: false, message: 'ERR!!' })
    try {
        const newWithdrawalslip = new Withdrawalslip({ maso, tenkhachhang, sotienrut, ngayrut })
        newWithdrawalslip.save()
        const pb = await Passbook.findOne({ maso })
        let updated = { sotiendagui: Number(pb.sotiendagui) - Number(sotienrut) }
        // let updated = { sotiendagui: pb.sotiendagui -= sotienrut }
        updated = await Passbook.findOneAndUpdate({ maso }, updated, { new: true })
        res.send({ success: true, message: 'Withdrawalslip create succsessfully' })
    } catch (error) {
        console.log(error)
    }
})
module.exports = router