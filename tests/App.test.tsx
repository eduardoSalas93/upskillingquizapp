import React from 'react'
import { render } from '@testing-library/react-native'
import App from '../App'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../src/redux/user'

const store = configureStore({
  reducer: {
    logIn: userSlice.reducer,
    logOut: userSlice.reducer,
  },
})

describe('App Component', () => {
  test('renders correctly', async () => {
    const appComponent = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(appComponent).toBeTruthy()
  })
})
