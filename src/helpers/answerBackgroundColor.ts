import { Colors } from '../theme/globalStyles/colors'

/**
 * @author Eduardo Salas
 * @date 18/09/2023
 * @name GameOveranswerBg
 * @description Method that returns the BG for answer correct or incorrect
 */
export const GameOveranswerBg = (
  answerSelected: string,
  answer: string,
  correctAnswer: string
) => {
  switch (true) {
    case answerSelected === answer && answerSelected === correctAnswer:
      return Colors.primary_green
    case answerSelected === answer && answerSelected !== correctAnswer:
      return Colors.red
    case answerSelected !== answer && answer === correctAnswer:
      return Colors.primary_green
    default:
      return Colors.white
  }
}

/**
 * @author Eduardo Salas
 * @date 18/09/2023
 * @name QuestionsAnswerBg
 * @description Method that return the BG color for answer selected
 */
export const QuestionsAnswerBg = (
  indexSelected: number | null,
  index: number,
  correctAnswer: string | null,
  answerSelected: string | null,
  answer: string
) => {
  if (indexSelected === null) {
    return Colors.white
  }

  if (indexSelected === index) {
    if (answerSelected === correctAnswer) {
      return Colors.primary_green
    } else {
      return Colors.red
    }
  }

  if (answer === correctAnswer) {
    return Colors.primary_green
  }

  return Colors.white
}
/**
 * @author Eduardo Salas
 * @date 18/09/2023
 * @name QuestionsAnswerTextColor
 * @description Method that return the text color
 */
export const QuestionsAnswerTextColor = (
  indexSelected: number | null,
  index: number,
  correctAnswer: string | null,
  answer: string,
  answerSelected: string
) => {
  if (indexSelected === null) {
    return Colors.black
  }

  if (indexSelected === index) {
    if (answerSelected === correctAnswer) {
      return Colors.white
    } else {
      return Colors.white
    }
  }

  if (answer === correctAnswer) {
    return Colors.white
  }

  return Colors.black
}
/**
 * @author Eduardo Salas
 * @date 18/09/2023
 * @name QuestionCardBorderColor
 * @description Method that return the  color for border color
 */
export const QuestionCardBorderColor = (difficulty: string | undefined) => {
  switch (difficulty) {
    case 'easy':
      return Colors.primary_blue
    case 'medium':
      return Colors.secondary_green
    default:
      return Colors.secundary_blue
  }
}
