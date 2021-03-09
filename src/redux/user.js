import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        entities: [],
        loggedIn: false,
        zonesToday: false,
        zonesToDisplay: []
    },
    reducers: {
        setUser(state, action) {
            state.entities.push({
                ...action.payload
            })
        },
        setZonesToday(state, action) {
            action.payload.forEach(zone => {
                if (zone.isComplete && !zone.isActive) {
                    state.zonesToday = true
                    state.zonesToDisplay.push(zone)
                }
            })
        },
        setLoggedIn(state) {
            state.loggedIn = true
        },
        setLoggedOut(state) {
            state.loggedIn = false
            state.entities = []
            state.zonesToday = false
            state.zonesToDisplay = []
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
        }, 
        completeZone(state, action) {
            // const completedZone = state.entities[0].zones.find(zone => zone.id === action.payload.id)
            // completedZone.isComplete = true
            // completedZone.isActive = false
            state.zonesToDisplay.push(action.payload)
            if (state.zonesToday === false) {
                state.zonesToday = true
            }
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
  addZone,
  completeZone,
  setZonesToday
} = userSlice.actions;

export default userSlice.reducer