import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
// 用configureStore生成reducer
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  //reducer是纯函数，改变store中的state
  //store和props没有关系
})
// type定义数据类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
