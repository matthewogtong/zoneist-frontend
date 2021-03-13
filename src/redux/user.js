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
        inZone: false,
        modalOpen: false,
        allTagNames: []
    },
    reducers: {
        setUser(state, action) {
            state.entities.push({
                ...action.payload
            })
            state.calendar.year = new Date().getFullYear()
            state.calendar.month = new Date().getMonth()
            state.calendar.date = new Date().getDate()
            action.payload.tags.forEach(tag => state.allTagNames.push(tag.name))
        },
        setZonesToday(state, action) {
            state.zonesToDisplay = []
            state.zonesToday = false
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
                        } 
                }
                if (state.zonesToDisplay === []) {
                    state.zonesToday = false
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
            state.inZone = false
            state.allTagNames = []
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
            state.entities[0].zones.push(action.payload)
            state.zonesToDisplay.push(action.payload)
            if (state.zonesToday === false) {
                state.zonesToday = true
            }
            state.inZone = false
            state.entities[0].tokens += 3
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
        enterZone(state) {
            state.inZone = true
        },
        leaveZone(state) {
            state.inZone = false
        },
        openModal(state) {
            state.modalOpen = true
        },
        closeModal(state) {
            state.modalOpen = false
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
  enterZone,
  leaveZone,
  openModal,
  closeModal
} = userSlice.actions;

export default userSlice.reducer