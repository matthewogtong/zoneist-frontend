import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        entities: [],
        loggedIn: false,
        zonesToday: false,
        zonesToDisplay: [],
        calendar: {
            year: 0,
            month: 0,
            date: 0
        },
        time: {
            timerHours : '00',
            timerMinutes: '00',
            timerSeconds: '00'
        }, 
        inZone: false
    },
    reducers: {
        setUser(state, action) {
            state.entities.push({
                ...action.payload
            })
            state.calendar.year = new Date().getFullYear()
            state.calendar.month = new Date().getMonth()
            state.calendar.date = new Date().getDate()
        },
        setZonesToday(state, action) {
            state.zonesToDisplay = []
            action.payload.forEach(zone => {
                if (zone.isComplete && !zone.isActive) {
                    if(
                        zone.zoneStartDate === state.calendar.date &&
                        zone.zoneStartMonth === state.calendar.month &&
                        zone.zoneStartYear === state.calendar.year &&
                        !state.zonesToDisplay.includes(zone)
                        ) {
                            state.zonesToday = true
                            state.zonesToDisplay.push(zone)
                        } else {
                            state.zonesToday = false
                            state.zonesToDisplay = []
                        }
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
            state.calendar.year = 0
            state.calendar.month = 0
            state.calendar.date = 0
            state.time.timerHours = "00"
            state.time.timerMinutes = "00"
            state.time.timerSeconds = "00"
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
            state.inZone = true
        }, 
        completeZone(state, action) {
            state.zonesToDisplay.push(action.payload)
            if (state.zonesToday === false) {
                state.zonesToday = true
            }
            state.inZone = false
        },
        setCalendar(state, action) {
            state.calendar.year = action.payload.year
            state.calendar.month = action.payload.month
            state.calendar.date = action.payload.date
        }, 
        setTime(state, action) {
            state.time.timerHours = action.payload[0]
            state.time.timerMinutes = action.payload[1]
            state.time.timerSeconds = action.payload[2]
        },
        leaveZone(state) {
            state.inZone = false
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
  setZonesToday,
  setCalendar,
  setTime,
  leaveZone
} = userSlice.actions;

export default userSlice.reducer