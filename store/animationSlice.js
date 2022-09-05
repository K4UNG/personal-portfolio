import { createSlice } from "@reduxjs/toolkit";

const animationSlice = createSlice({
    name: 'animation',
    initialState: {
        state: null,
        number: '01',
        text: ''
    },
    reducers: {
        removeState(state) {
            state.state = null
            state.number = null
        },
        hideCursor(state) {
            state.state = 'hide'
        },
        addMin(state, payload) {
            state.state = payload
        },
        project(state, payload) {
            state.state = 'expand'
            state.text = payload.payload
        },
        image(state, payload) {
            state.state = 'image'
            state.text = payload.payload
        }
    }
})

export default animationSlice.reducer;
export const animationActions = animationSlice.actions;