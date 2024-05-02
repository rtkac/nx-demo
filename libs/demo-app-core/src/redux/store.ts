import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import { commonApiClient } from './apiClients'
import { outageMiddleware } from './middlewares'

export const outageSlice = createSlice({
  name: 'outage',
  initialState: {
    isOutage: false,
    message: null,
  },
  reducers: {
    setOutage: (state, action) => {
      state.isOutage = true
      state.message = action.payload.data.message
    },
  },
})

const rootReducer = combineReducers({
  outage: outageSlice.reducer,
})

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: {
    [commonApiClient.reducerPath]: commonApiClient.reducer,
    rootReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(commonApiClient.middleware, outageMiddleware)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
