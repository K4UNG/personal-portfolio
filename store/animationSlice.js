import { createSlice } from "@reduxjs/toolkit";

const animationSlice = createSlice({
    name: 'animation',
    initialState: {
        state: null,
        number: '01'
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
        },
        project(state, payload) {
            state.state = 'Enter'
            state.number = payload.payload
        }
    }
})

export default animationSlice.reducer;
export const animationActions = animationSlice.actions;