import { configureStore } from '@reduxjs/toolkit'

import themeReducer from '../features/theme/themeSlice'
export function makeStore() {
  return configureStore({
    reducer: {
      theme: themeReducer,
    },
  })
}
const store = makeStore()
// const store = configureStore({
//   reducer: {
//     theme: themeReducer,
//     counter: counterReducer,
//   },
// })

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
