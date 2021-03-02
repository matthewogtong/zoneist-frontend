import { createSlice } from "@reduxjs/toolkit"

const regionSlice = createSlice({
    name: "region",
    initialState: {
        entities: []
    },
    reducers: {
        setRegions(state, action) {
            state.entities.push([
                ...action.payload
            ])
        }
    }
})

export const { setRegions } = regionSlice.actions

export default regionSlice.reducer