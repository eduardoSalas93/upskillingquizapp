import React from 'react'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MainScreen } from '../../../src/screens'
import { NavigationContainer } from '@react-navigation/native'

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

describe('Main Screen Component', () => {
  let store: any
  const initialState = {
    userInfo: {
      username: 'userAdmin',
    },
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  test('renders the MainScreen component correctly', () => {
    const main = render(
      <Provider store={store}>
        <NavigationContainer>
          <MainScreen {...props} />
        </NavigationContainer>
      </Provider>
    )
    expect(main).toBeTruthy()
  })
})
