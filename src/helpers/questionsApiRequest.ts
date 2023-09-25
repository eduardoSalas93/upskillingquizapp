import { GameDiff } from '../types/gameDiff'
import { QuestionQty, QuestionResp } from '../types/question'

/**
 * @author Eduardo Salas
 * @date 25/09/20223
 * @name getQuestionsApi
 * @description Method for requesting questions from api
 */
export const getQuestionsApi = async (difficulty: string) => {
  const resp = await fetch(
    `https://opentdb.com/api.php?amount=${QuestionQty}${
      difficulty !== GameDiff.default.toLowerCase()
        ? `&difficulty=${difficulty}`
        : ''
    }`
  )
  const { results }: QuestionResp = await resp.json()
  const questionArr = results.map((question) => ({
    ...question,
    questionAnswers: question.incorrect_answers
      .concat(question.correct_answer)
      .sort((a, b) => a.localeCompare(b)),
  }))
  return questionArr
}
