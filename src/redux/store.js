import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"
import regionReducer from "./region"

const store = configureStore({
    reducer: {
        user: userReducer,
        region: regionReducer
    }
})

export default store