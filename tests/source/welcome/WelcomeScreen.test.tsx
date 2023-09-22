import React from 'react'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import WelcomeScreen from '../../../src/screens/welcome/WelcomeScreen' // Import your component
import configureStore from 'redux-mock-store'

// Create a mock Redux store
const mockStore = configureStore([])

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: {
    params: {
      type: 'main',
    },
  },
  ...props,
})

const props: any = createTestProps({})

describe('WelcomeScreen Component', () => {
  let store
  const initialState = {
    userInfo: {
      username: 'userAdmin',
    },
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  test('renders the WelcomeScreen component correctly', () => {
    const welcome = render(
      <Provider store={store}>
        <WelcomeScreen {...props} />
      </Provider>
    )

    expect(welcome).toBeTruthy()
  })
})
