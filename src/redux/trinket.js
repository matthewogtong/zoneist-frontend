import { createSlice } from "@reduxjs/toolkit"

const trinketSlice = createSlice({
    name: "trinket",
    initialState: {
        entities: []
    },
    reducers: {
        setTrinkets(state, action) {
            state.entities.push({
                ...action.payload
            })
        }
    }
})

export const { setTrinkets } = trinketSlice.actions

export default trinketSlice.reducer