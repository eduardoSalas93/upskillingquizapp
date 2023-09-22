import { render, screen } from '@testing-library/react-native'
import LoginForm from '../../../src/screens/auth/components/LoginForm'
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../../../src/redux/user'
import { Provider } from 'react-redux'

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: {
    params: {
      type: 'login',
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

describe('LoginForm component testing', () => {
  test('Shoud create component', () => {
    const loginForm = render(
      <Provider store={store}>
        <LoginForm {...props} />
      </Provider>
    )
    expect(loginForm).toBeTruthy()
  })
})
