import { createSlice } from "@reduxjs/toolkit";

const animationSlice = createSlice({
    name: 'animation',
    initialState: {
        state: null
    },
    reducers: {
        removeState(state) {
            state.state = null
        },
        hideCursor(state) {
            state.state = 'hide'
        },
        addMin(state, payload) {
            state.state = payload
        }
    }
})

export default animationSlice.reducer;
export const animationActions = animationSlice.actions;