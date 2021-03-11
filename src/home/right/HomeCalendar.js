import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { setCalendar, setZonesToday } from '../../redux/user'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const HomeCalendar = () => {
    const [fullDate, setFullDate] = useState(new Date());

    const dispatch = useDispatch()
    const camelcaseKeys = require('camelcase-keys');

    const history = useHistory()
    

    const userZones = useSelector(state => camelcaseKeys(state.user.entities[0].zones))
    const calendarInfo = useSelector(state => state.user.calendar)

    const onChange = data => {
      setFullDate(data)
      const toDispatch = {
        year : data.getFullYear(),
        month : data.getMonth(),
        date : data.getDate()
      }
      dispatch(setCalendar(toDispatch))
      dispatch(setZonesToday(userZones))
      history.push('/zones')
    }


    return (
      <div className="home-calendar">
        <Calendar onChange={onChange} value={fullDate} />
      </div>
    );
}

export default HomeCalendar