
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WithdrawalslipSchema = new Schema({
    ngayrut: {
        type: String
    },
    sotienrut: {
        type: Number
    },
    maso: {

        type: String
    },
    tenkhachhang: {
        type: String

    }
})

module.exports = mongoose.model('Withdrawalslip', WithdrawalslipSchema)