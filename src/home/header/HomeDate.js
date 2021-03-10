import React from 'react'
import { useSelector } from 'react-redux'
import { getDay, getMonth, getDate } from 'date-fns'

const HomeDate = () => {
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

    const date = new Date()

    const info = useSelector(state => state.user.calendar)

    const newMonth = getMonth(new Date(info.year, info.month, info.date))
    const newDate = getDate(new Date(info.year, info.month, info.date))
    const newDay = getDay(new Date(info.year, info.month, info.date))
    console.log(newDay)
    console.log(newMonth)
    console.log(newDate)
    const formattedHomeMonth = months[newMonth]
    const formattedHomeDate = dates[newDate]
    const formattedHomeDay = days[newDay]

    return(
        <div className="home-date">
            <h2>{formattedHomeMonth} {formattedHomeDate}</h2>
            <h4>{formattedHomeDay}</h4>
        </div>
    )
}
export default HomeDate