import { createSlice } from "@reduxjs/toolkit"

const tagSlice = createSlice({
    name: "tag",
    initialState: {
        entities: []
    },
    reducers: {
        setTags(state, action) {
            state.entities.push([
                ...action.payload
            ])
        },
        addTag(state, action) {
            state.entities.push(action.payload)
        },
        deleteTag(state, action) {
            const index = state.entities.findIndex(action.payload.id)
            state.entities.tags.splice(index, 1)
        }
    }
})

export const { setTags, addTag, deleteTag } = tagSlice.actions

export default tagSlice.reducer