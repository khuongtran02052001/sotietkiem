
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PassbookSchema = new Schema({
    maso: {
        type: String
    },

    sotiendagui: {
        type: Number
    },
    loaitietkiem: {
        type: String
    },
    ngaymo: {
        type: String
    },
    tenkhachhang: {
        type: String
    },
    CMND: {
        type: String
    },
    diachi: {
        type: String
    }

})

module.exports = mongoose.model('Passbook', PassbookSchema)