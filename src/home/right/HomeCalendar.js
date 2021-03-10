import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCalendar } from '../../redux/user'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const HomeCalendar = () => {
    const [fullDate, setFullDate] = useState(new Date());

    const dispatch = useDispatch()

    const onChange = data => {
      setFullDate(data)
      let toDispatch = {
        year : data.getFullYear(),
        month : data.getMonth(),
        date : data.getDate()
      }
      dispatch(setCalendar(toDispatch))
    }

    return (
      <div className="home-calendar">
        <Calendar onChange={onChange} value={fullDate} />
      </div>
    );
}

export default HomeCalendar