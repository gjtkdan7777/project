const model = require('../mongoose/model')

// CREATE
const articleCreate = async (req, res) => {
    const { nickName, title, content } = req.body
    const newarticle = await model.Article({ nickName, title, content })
    const saveRequest = await newarticle.save()
    console.log(saveRequest)
    res.send(true)
}
// READ
const allArticle = async (req, res) => {
    const articles = await model.Article.find({})
    res.send(articles)
}

// 수정하기 눌렀을때
const getArticle = async (req, res) => {
    const { nickName } = req.params
    const article = await model.Article.findOne({ nickName })
    res.send(article)
}
// UPDATE
const articleUpdate = async (req, res) => {
    const { id, title, content } = req.body
    const updatedArticle = await model.Article.findByIdAndUpdate(id, { title, content })
    res.send(updatedArticle)
}
// DELETE
const articleDelete = (req, res) => {}

module.exports = { articleCreate, allArticle, articleUpdate, articleDelete, getArticle }
