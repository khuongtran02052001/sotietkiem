const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CustomerSchema = newSchema({
    makh: {
        type: String
    },
    hoten: {
        type: String
    },
    cmnd: {
        type: String
    },
    email: {
        type: String
    },
    gioitinh: {
        type: Boolean
    },
    diachi: {
        type: String
    },

})


module.exports = mongoose.model('Customer', CustomerSchema)