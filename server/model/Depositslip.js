const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DepositslipSchema = new Schema({
    ngaygui: {
        type: String
    },
    sotiendagui: {
        type: Number
    },
    maso: {

        type: String
    },
    tenkhachhang: {
        type: String

    }

})

module.exports = mongoose.model('Depositslip', DepositslipSchema)