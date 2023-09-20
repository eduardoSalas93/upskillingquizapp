import React from 'react'
import { render } from '@testing-library/react-native'
import AnswerItemCard from '../../src/components/questionAnswerCard/AnswerItemCard'

const props = {
  answer: '',
  answerSelected: null,
  correctAnswer: null,
  index: 0,
  answerIndex: null,
  handleAnswerSelected: jest.fn(),
}

describe('AnswerItemCard Component', () => {
  test('renders the AnswerItemCard component correctly', () => {
    const answerItemCardCard = render(<AnswerItemCard {...props} />)
    expect(answerItemCardCard).toBeTruthy()
  })
})
