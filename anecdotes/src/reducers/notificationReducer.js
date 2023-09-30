import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        settingNotification(state, action) {
            return action.payload
        },

        removingNotification(state, action) {
            return ''
        }
    }
})

export const { settingNotification, removingNotification } = notificationSlice.actions
export default notificationSlice.reducer