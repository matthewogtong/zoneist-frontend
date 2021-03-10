import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCalendar, setZonesToday } from '../../redux/user'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const HomeCalendar = () => {
    const [fullDate, setFullDate] = useState(new Date());

    const dispatch = useDispatch()

    const userZones = useSelector(state => state.user.entities[0].zones)
    const calendarInfo = useSelector(state => state.user.calendar)
    console.log(userZones)
    console.log(calendarInfo)

    const onChange = data => {
      setFullDate(data)
      let toDispatch = {
        year : data.getFullYear(),
        month : data.getMonth(),
        date : data.getDate()
      }
      dispatch(setCalendar(toDispatch))
      dispatch(setZonesToday(userZones))
    }


    return (
      <div className="home-calendar">
        <Calendar onChange={onChange} value={fullDate} />
      </div>
    );
}

export default HomeCalendar