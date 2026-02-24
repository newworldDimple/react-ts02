import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  username: string
}

interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      console.log('state1',state)
      state.isAuthenticated = true
      state.user = action.payload
    },
    logout: (state) => {
      console.log('state2',state)
      state.isAuthenticated = false
      state.user = null
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
