import React from 'react'
import { useSelector } from 'react-redux'
import { getDay, getMonth, getDate } from 'date-fns'
import { useSpring, animated } from "react-spring"

const HomeDate = () => {

    const fadeIn = useSpring({
        opacity: 1,
        marginLeft: 0,
        from: { opacity: 0, marginLeft: -500 },
        delay: 250,
        duration: 1000
      })

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    const dates = [
        "0",
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th",
      "11th",
      "12th",
      "13th",
      "14th",
      "15th",
      "16th",
      "17th",
      "18th",
      "19th",
      "20th",
      "21st",
      "22nd",
      "23rd",
      "24th",
      "25th",
      "26th",
      "27th",
      "28th",
      "29th",
      "30th",
      "31st",
    ]

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]

    const info = useSelector(state => state.user.calendar)

    const newMonth = getMonth(new Date(info.year, info.month, info.date))
    const newDate = getDate(new Date(info.year, info.month, info.date))
    const newDay = getDay(new Date(info.year, info.month, info.date))

    const formattedHomeMonth = months[newMonth]
    const formattedHomeDate = dates[newDate]
    const formattedHomeDay = days[newDay]

    return(
        <div className="home-date">
            <animated.h2 style={fadeIn} >{formattedHomeMonth.toLowerCase()} {formattedHomeDate}</animated.h2>
            <animated.h4 style={fadeIn} >{formattedHomeDay.toLowerCase()}</animated.h4>
        </div>
    )
}
export default HomeDate