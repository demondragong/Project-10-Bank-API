import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visible: false,
}

export const nameEditorSlice = createSlice({
  name: 'nameEditor',
  initialState,
  reducers: {
    show: (state) => {
      state.visible = true
    },
    hide: (state) => {
      state.visible = false
    },
    toggle: (state) => {
        state.visible = !state.visible
    }
  },
})

// Action creators are generated for each case reducer function
export const { show, hide, toggle } = nameEditorSlice.actions

export default nameEditorSlice.reducer