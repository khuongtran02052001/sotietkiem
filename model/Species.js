const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SpeciesSchema = new Schema({
    tenloai: {
        type: String
    }
})

module.exports = mongoose.model('Species', SpeciesSchema)