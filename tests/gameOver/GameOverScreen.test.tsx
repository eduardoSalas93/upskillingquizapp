import React from 'react'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { GameOverScreen } from '../../src/screens'

// Create a mock Redux store
const mockStore = configureStore([])

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: {
    params: {
      type: 'GameOver',
    },
  },
  ...props,
})

const props: any = createTestProps({})

describe('GameOver Screen Component', () => {
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

  test('renders the Game Over Screen component correctly', () => {
    const gameOver = render(
      <Provider store={store}>
        <GameOverScreen {...props} />
      </Provider>
    )
    expect(gameOver).toBeTruthy()
  })
})
