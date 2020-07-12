const mongoose = require('mongoose')
const Schema = mongoose.Schema

const positionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    category: {
        ref: 'categories',
        type: Schema.Types.ObjectID
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectID
    }
})

module.exports = mongoose.model('positions', positionSchema)
