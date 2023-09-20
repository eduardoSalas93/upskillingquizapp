import React from 'react'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../../../src/redux/user'
import { LoginScreen } from '../../../src/screens'

jest.mock('@react-native-async-storage/async-storage')

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

const store = configureStore({
  reducer: {
    logIn: userSlice.reducer,
    logOut: userSlice.reducer,
  },
})

describe('Login Screen testing', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Should create component', () => {
    const loginScreen = render(
      <Provider store={store}>
        <LoginScreen {...props} />
      </Provider>
    )

    expect(loginScreen).toBeTruthy()
  })
})
