const dbConnection = require("../../db/dbConfig");
const { StatusCodes } = require('http-status-codes');

async function postAnswer(req, res) {
  const { questionid, answer } = req.body;
  const userid = req.user.userid;

  if (!questionid || !answer) {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "please provide questionid and answer" });
  }

  try {
    await dbConnection.execute(
      "INSERT INTO answers (userid, questionid, answer) VALUES (?, ?, ?)",
      [userid, questionid, answer]
    );

    return res.status(StatusCodes.CREATED).json({ msg: "answer posted successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "something went wrong, please try again later" });
  }
}

async function getAnswers(req, res) {
  const { question_id } = req.params;

  try {
    const [answers] = await dbConnection.query(
      `SELECT a.answerid, a.answer, u.username
       FROM answers a
       JOIN users u ON a.userid = u.userid
       WHERE a.questionid = ?
       ORDER BY a.answerid DESC`,
      [question_id]
    );

    return res.status(StatusCodes.OK).json({ answers });
  } catch (error) {
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "something went wrong, please try again later" });
  }
}

module.exports = { postAnswer, getAnswers };
