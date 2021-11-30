const mongoose = require('mongoose')
const moment = require('moment')

const Writer = mongoose.Schema({
    id: { type: String, default: '', required: true, unique: true },
    joinAt: { type: String, default: moment().format('YYYY-MM-DD hh:mm:ss') },
    nickName: { type: String, default: '', required: true, unique: true },
    email: { type: String, default: '', required: true, unique: true },
    hashedPassword: { type: String, default: '', required: true },
    birth: { type: String, default: '', required: true },
})

module.exports = Writer
