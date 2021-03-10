import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const HomeCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
      setDate(date)
    }
    console.log(date.getDate())

    return (
      <div className="home-calendar">
        <Calendar onChange={onChange} value={date} />
      </div>
    );
}

export default HomeCalendar