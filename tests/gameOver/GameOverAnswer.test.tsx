import React from 'react'
import { render } from '@testing-library/react-native'
import GameOverAnswers from '../../src/screens/gameOver/components/GameOverAnswers'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

// Create a mock Redux store
const mockStore = configureStore([])
const props = {
  handleShowAnswers: jest.fn(),
}

describe('AnswerItemCard Component', () => {
  let store: any
  const initialState = {
    questions: {
      points: 0,
      difficultySelected: '',
    },
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  test('renders the AnswerItemCard component correctly', () => {
    const answerItemCardCard = render(
      <Provider store={store}>
        <GameOverAnswers {...props} />
      </Provider>
    )
    expect(answerItemCardCard).toBeTruthy()
  })
})
