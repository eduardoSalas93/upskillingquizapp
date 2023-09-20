import React from 'react'
import { render } from '@testing-library/react-native'
import GameOverScoreCard from '../../src/screens/gameOver/components/GameOverScoreCard'

const props = {
  points: 0,
  handleTryNewQuiz: jest.fn(),
  handleGoHome: jest.fn(),
  handleShowAnswers: jest.fn(),
}

describe('AnswerItemCard Component', () => {
  test('renders the AnswerItemCard component correctly', () => {
    const answerItemCardCard = render(<GameOverScoreCard {...props} />)
    expect(answerItemCardCard).toBeTruthy()
  })
})
