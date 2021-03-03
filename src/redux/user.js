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
            state.entities = []
        },
        purchaseTrinket(state, action) {
            state.entities[0].tokens = action.payload.user.tokens
            state.entities[0].trinkets.push(action.payload.trinket)
        },
        purchaseRegion(state, action) {
            state.entities[0].tokens = action.payload.user.tokens
            state.entities[0].regions.push(action.payload.region)
        },
        addTag(state, action) {
            state.entities[0].tags.push(action.payload)
        },
        deleteTag(state, action) {
            const index = state.entities[0].tags.findIndex(tag => tag.id === action.payload)
            state.entities[0].tags.splice(index, 1)
        },
        addZone(state, action) {
            state.entities[0].zones.push(action.payload)
        }
    }
})

export const {
  setUser,
  setLoggedIn,
  setLoggedOut,
  purchaseTrinket,
  purchaseRegion,
  addTag,
  deleteTag,
  addZone
} = userSlice.actions;

export default userSlice.reducer