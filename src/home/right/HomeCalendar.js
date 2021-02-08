import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const HomeCalendar = () => {
    const [value, onChange] = useState(new Date());
   
    return (
      <div className="home-calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
    );
}

export default HomeCalendar