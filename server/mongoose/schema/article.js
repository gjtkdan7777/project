const mongoose = require('mongoose')
const moment = require('moment')
const Article = new mongoose.Schema({
    nickName: { type: String, default: '', required: true }, // 게시글 본문
    title: { type: String, default: '', required: true }, // 제목
    content: { type: String, default: '', required: true }, // 게시글
    createAt: { type: Date, default: moment().format('YYYY-MM-DD'), required: true }, // 작성일
    views: { type: Number, default: -1 }, // 조회수
    like: { type: Number, default: 0 }, // 좋아요
})

module.exports = Article
