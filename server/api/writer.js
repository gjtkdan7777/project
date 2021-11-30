const model = require('../mongoose/model')

// CREATE
const writerCreate = async (req, res) => {
    const { id, nickName, email, hashedPassword, birth } = req.body
    const newWriter = await model.Writer({ id, nickName, email, hashedPassword, birth })
    const saveRequest = await newWriter.save()
    console.log(saveRequest)
    res.send(true)
}
// READ
const getWriter = async (req, res) => {
    const { nickName } = req.params
    console.log(nickName)
    const writer = await model.Writer.findOne({ nickName })
    res.send(writer)
}
// UPDATE
const writerUpdate = (req, res) => {}
// DELETE
const writerDelete = (req, res) => {}

module.exports = { writerCreate, getWriter, writerUpdate, writerDelete }
