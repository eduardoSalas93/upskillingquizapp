import {
  GameOveranswerBg,
  QuestionCardBorderColor,
  QuestionsAnswerBg,
  QuestionsAnswerTextColor,
} from '../../src/helpers/answerBackgroundColor'
import { Colors } from '../../src/theme/globalStyles/colors'
import {
  PropsCorrectAnswer,
  PropsWrongAnswer,
} from '../fixtures/questionFixture'

describe('Testing helpers functions', () => {
  test('The function QuestionsAnswerTextColor should return white color', () => {
    const { indexSelected, index, correctAnswer, answer } = PropsCorrectAnswer
    const answerSelected = correctAnswer
    const textColor = QuestionsAnswerTextColor(
      indexSelected,
      index,
      correctAnswer,
      answer,
      answerSelected
    )
    expect(textColor).toBe(Colors.white)
  })
  test('The function QuestionsAnswerTextColor should return white color', () => {
    const { indexSelected, index, correctAnswer, answer } = PropsWrongAnswer
    const answerSelected = answer
    const textColor = QuestionsAnswerTextColor(
      indexSelected,
      index,
      correctAnswer,
      answer,
      answerSelected
    )
    expect(textColor).toBe(Colors.white)
  })
  test('The function QuestionsAnswerTextColor should return white color', () => {
    const { index, correctAnswer, answer } = PropsCorrectAnswer
    const answerSelected = correctAnswer
    const indexSelected = 3
    const textColor = QuestionsAnswerTextColor(
      indexSelected,
      index,
      correctAnswer,
      answer,
      answerSelected
    )
    expect(textColor).toBe(Colors.white)
  })
  test('The function QuestionsAnswerTextColor should return black color', () => {
    const { index, correctAnswer, answer } = PropsWrongAnswer
    const answerSelected = answer
    const indexSelected = 3
    const textColor = QuestionsAnswerTextColor(
      indexSelected,
      index,
      correctAnswer,
      answer,
      answerSelected
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
  test('The function GameOveranswerBg should return principal green color', () => {
    const { correctAnswer, answer } = PropsCorrectAnswer
    const answerSelected = 'answer'
    const backgroundColor = GameOveranswerBg(
      answerSelected,
      answer,
      correctAnswer
    )
    expect(backgroundColor).toBe(Colors.primary_green)
  })
  test('The function GameOveranswerBg should return principal white color', () => {
    const { correctAnswer } = PropsCorrectAnswer
    const answer2 = 'answer2'
    const answerSelected = 'answer'
    const backgroundColor = GameOveranswerBg(
      answerSelected,
      answer2,
      correctAnswer
    )
    expect(backgroundColor).toBe(Colors.white)
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
  test('The function QuestionsAnswerBg should return white color', () => {
    const { index, correctAnswer, answer } = PropsWrongAnswer
    const answerSelected = answer
    const indexSelected = 3
    const backgroundColor = QuestionsAnswerBg(
      indexSelected,
      index,
      correctAnswer,
      answerSelected,
      answer
    )
    expect(backgroundColor).toBe(Colors.white)
  })
  test('The function QuestionsAnswerBg should return green color', () => {
    const { index, correctAnswer, answer } = PropsCorrectAnswer
    const answerSelected = answer
    const indexSelected = 3
    const backgroundColor = QuestionsAnswerBg(
      indexSelected,
      index,
      correctAnswer,
      answerSelected,
      answer
    )
    expect(backgroundColor).toBe(Colors.primary_green)
  })
  test('The function QuestionCardBorderColor should return a color depending difficulty, this case blue', () => {
    const difficulty = 'easy'
    const questionBorderColor = QuestionCardBorderColor(difficulty)
    expect(questionBorderColor).toBe(Colors.primary_blue)
  })
  test('The function QuestionCardBorderColor should return a color depending difficulty, this case green', () => {
    const difficulty = 'medium'
    const questionBorderColor = QuestionCardBorderColor(difficulty)
    expect(questionBorderColor).toBe(Colors.secondary_green)
  })
  test('The function QuestionCardBorderColor should return a color depending difficulty, this case red', () => {
    const difficulty = 'hard'
    const questionBorderColor = QuestionCardBorderColor(difficulty)
    expect(questionBorderColor).toBe(Colors.red)
  })
})
