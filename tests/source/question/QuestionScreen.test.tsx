import React from 'react'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { QuestionScreen } from '../../../src/screens'

// Create a mock Redux store
const mockStore = configureStore([])

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: {
    params: {
      type: 'Question',
    },
  },
  ...props,
})

const props: any = createTestProps({})

describe('Question Screen Component', () => {
  let store: any
  const initialState = {
    questions: {
      points: 0,
      isLoading: false,
      questions: [],
      currentQuestion: null,
      answeredQuestions: [],
      questionIndex: 0,
      currentQuestionCorrectAnswer: '',
      difficultySelected: '',
    },
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  test('renders the Question Screen component correctly', () => {
    const welcome = render(
      <Provider store={store}>
        <QuestionScreen {...props} />
      </Provider>
    )
    expect(welcome).toBeTruthy()
  })
})
