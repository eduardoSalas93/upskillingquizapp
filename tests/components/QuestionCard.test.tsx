import React from 'react'
import { render } from '@testing-library/react-native'
import QuestionCard from '../../src/components/questionAnswerCard/QuestionCard'

const props = {
  difficulty: 'easy',
  question: '',
}

describe('QuestionCard Component', () => {
  test('renders the Question Screen component correctly', () => {
    const questionCard = render(<QuestionCard {...props} />)
    expect(questionCard).toBeTruthy()
  })
})
