import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        entities: [],
        loggedIn: false
    },
    reducers: {
        setUser(state, action) {
            state.entities.push({
                ...action.payload
            })
        },
        setLoggedIn(state) {
            state.loggedIn = true
        },
        setLoggedOut(state) {
            state.loggedIn = false
        },
        purchaseTrinket(state, action) {
            state.entities.tokens = action
        }
    }
})

export const {
  setUser,
  setLoggedIn,
  setLoggedOut,
  purchaseTrinket,
} = userSlice.actions;

export default userSlice.reducer