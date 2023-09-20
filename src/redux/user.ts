import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  username: string
  isLoading: boolean
  scoreHistory: []
}

const initialState: UserState = {
  username: '',
  isLoading: false,
  scoreHistory: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoading = true
      state.username = action.payload
      state.isLoading = false
    },
    logOut: (state) => {
      state.username = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = userSlice.actions

export default userSlice.reducer
