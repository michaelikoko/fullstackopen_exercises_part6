import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        createNotification(state, action) {
            return action.payload
        },

        clearNotification(state, action) {
            return ''
        }
    }
})

export const { createNotification, clearNotification } = notificationSlice.actions

export const setNotification = (message, duration) => {

    return (dispatch) => {
        dispatch(createNotification(message))
        setTimeout(() => {
            dispatch(clearNotification())
        }, duration)
    }
}

export default notificationSlice.reducer