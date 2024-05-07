import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit'
import { outageSlice } from '../store'

export const outageMiddleware: Middleware = (api) => (next) => (action) => {
  if (isRejectedWithValue(action) && (action.payload as any).status === 503) {
    return api.dispatch(outageSlice.actions.setOutage(action.payload))
  }

  return next(action)
}
