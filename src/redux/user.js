import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        entities: []
        // id: 0,
        // username: "",
        // tokens: 0,
        // tags: [],
        // trinkets: [],
        // regions: [],
        // zones: [],
        // loggedIn: false
    },
    reducers: {
        setUser(state, action) {
            state.entities.push({
                ...action.payload
            })
            // state.id = action.payload.id,
            // state.username = action.payload.username,
            // state.tokens = action.payload.tokens,
            // state.tags = action.payload.tags,
            // state.trinkets = action.payload.trinkets,
            // state.regions = action.payload.regions, 
            // state.zones = action.payload.regions,
            // state.loggedIn = true
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer