const express = require('express')
const app = express()
const { Article, Writer } = require('./api')
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/article', Article.allArticle)
app.get('/article/:nickName', Article.getArticle)
app.post('/article', Article.articleCreate)
app.put('/article', Article.articleUpdate)
app.delete('/article', Article.articleDelete)

app.get('/writer/:nickName', Writer.getWriter)
app.post('/writer', Writer.writerCreate)

app.listen(process.env.PORT, 'localhost', () => {
    console.log(`App listening at http://localhost:${process.env.PORT}`)
})
