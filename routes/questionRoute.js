const express = require('express');
const router = express.Router()

// authonthication middleware
const authMiddleware = require('./controller/middleWare/authmiddleware')

// question controllers
const { postQuestion, getAllQuestions, getSingleQuestion } = require('./controller/questionController')

router.post("/", authMiddleware, postQuestion)
router.get("/all-questions", authMiddleware, getAllQuestions)
router.get("/:question_id", authMiddleware, getSingleQuestion)

module.exports = router
