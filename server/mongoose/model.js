const mongoose = require('mongoose')
const schema = require('./schema')

const db = mongoose.connection
const model = (() => {
    db.on('error', () => {
        console.error('123')
    })
    db.on('open', () => {
        console.log('Connecting Mongdb!!')
    })

    mongoose.connect(`mongodb+srv://tkdan7777:azaa8613@cluster0.avjr9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const model = {}
    for (let key in schema) {
        model[key] = mongoose.model(key, schema[key])
    }
    return model
})()

module.exports = model
