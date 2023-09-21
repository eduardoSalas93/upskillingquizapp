import { logIn, logOut, userSlice } from '../../src/redux/user'
import { initialState, userAuth } from '../fixtures/userFixture'

describe('Testing UserSlice', () => {
  test('should slice name must be user and return initial state ', () => {
    expect(userSlice.name).toBe('user')
    const initialStateaux = userSlice.getInitialState()
    expect(initialStateaux).toEqual(initialState)
  })
  test('should login and update the state', () => {
    const state = userSlice.reducer(initialState, logIn('userAdmin'))
    expect(state).toEqual(userAuth)
  })
  test('should logout and update the state', () => {
    const state = userSlice.reducer(initialState, logOut())
    expect(state).toEqual(initialState)
  })
})
