import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"
import regionReducer from "./region"
import trinketReducer from "./trinket"
import tagReducer from "./tag"

const store = configureStore({
    reducer: {
        user: userReducer,
        region: regionReducer,
        trinket: trinketReducer,
        tag: tagReducer
    }
})

export default store