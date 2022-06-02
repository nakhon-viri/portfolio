import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '../../app/store'

type actionTheme = 'DEFAULT' | '3D'

export interface ThemeState {
  theme: actionTheme
}

const initialState: ThemeState = {
  theme: 'DEFAULT',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    upDateTheme: (state: ThemeState, action: PayloadAction<actionTheme>) => {
      state.theme = action.payload
    },
  },
})

export const { upDateTheme } = themeSlice.actions

export const themes = (state: AppState) => state.theme.theme
export default themeSlice.reducer
