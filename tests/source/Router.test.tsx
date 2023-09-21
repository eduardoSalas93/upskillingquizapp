import { render } from '@testing-library/react-native'
import Router from '../../src/Router'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('Router Component', () => {
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
  test('renders correctly', async () => {
    const router = render(
      <Provider store={store}>
        <Router />
      </Provider>
    )
    expect(router).toBeTruthy()
  })
})
