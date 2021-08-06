const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BankSchema = mongoose.BankSchema({

    tenNH: {
        type: String
    },
    Laisuat: {
        type: Number
    }
})

module.exports = mongoose.model('Bank', BankSchema)
