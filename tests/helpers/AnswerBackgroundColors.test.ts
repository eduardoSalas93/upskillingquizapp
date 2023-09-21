import {
  GameOveranswerBg,
  QuestionCardBorderColor,
  QuestionsAnswerBg,
  QuestionsAnswerTextColor,
} from '../../src/helpers/answerBackgroundColor'
import { Colors } from '../../src/theme/globalStyles/colors'

const PropsCorrectAnswer = {
  indexSelected: 2,
  index: 2,
  correctAnswer: 'Correct Answer',
  answer: 'Correct Answer',
}

const PropsWrongAnswer = {
  indexSelected: 2,
  index: 2,
  correctAnswer: 'Correct Answer',
  answer: 'Wrong Answer',
}

describe('Testing helpers functions', () => {
  test('The function QuestionsAnswerTextColor should return white color', () => {
    const { indexSelected, index, correctAnswer, answer } = PropsCorrectAnswer
    const textColor = QuestionsAnswerTextColor(
      indexSelected,
      index,
      correctAnswer,
      answer
    )
    expect(textColor).toBe(Colors.white)
  })
  test('The function QuestionsAnswerTextColor should return black color', () => {
    const { indexSelected, index, correctAnswer, answer } = PropsWrongAnswer
    const textColor = QuestionsAnswerTextColor(
      indexSelected,
      index,
      correctAnswer,
      answer
    )
    expect(textColor).toBe(Colors.black)
  })
  test('The function GameOveranswerBg should return Green color', () => {
    const { correctAnswer, answer } = PropsCorrectAnswer
    const answerSelected = correctAnswer
    const backgroundColor = GameOveranswerBg(
      answerSelected,
      answer,
      correctAnswer
    )
    expect(backgroundColor).toBe(Colors.primary_green)
  })
  test('The function GameOveranswerBg should return red color', () => {
    const { correctAnswer, answer } = PropsWrongAnswer
    const answerSelected = answer
    const backgroundColor = GameOveranswerBg(
      answerSelected,
      answer,
      correctAnswer
    )
    expect(backgroundColor).toBe(Colors.red)
  })
  test('The function QuestionsAnswerBg should return green color', () => {
    const { index, indexSelected, correctAnswer, answer } = PropsCorrectAnswer
    const answerSelected = correctAnswer
    const backgroundColor = QuestionsAnswerBg(
      indexSelected,
      index,
      correctAnswer,
      answerSelected,
      answer
    )
    expect(backgroundColor).toBe(Colors.primary_green)
  })
  test('The function QuestionsAnswerBg should return red color', () => {
    const { index, indexSelected, correctAnswer, answer } = PropsWrongAnswer
    const answerSelected = answer
    const backgroundColor = QuestionsAnswerBg(
      indexSelected,
      index,
      correctAnswer,
      answerSelected,
      answer
    )
    expect(backgroundColor).toBe(Colors.red)
  })
  test('The function QuestionCardBorderColor should return a color depending difficulty, this case blue', () => {
    const difficulty = 'easy'
    const questionBorderColor = QuestionCardBorderColor(difficulty)
    expect(questionBorderColor).toBe(Colors.primary_blue)
  })
})
