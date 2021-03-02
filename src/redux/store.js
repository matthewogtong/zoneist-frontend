import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"
import regionReducer from "./region"
import trinketReducer from "./trinket"

const store = configureStore({
    reducer: {
        user: userReducer,
        region: regionReducer,
        trinket: trinketReducer
    }
})

export default store