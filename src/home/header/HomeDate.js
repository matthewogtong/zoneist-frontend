import React from 'react'
import { format } from 'date-fns'

const HomeDate = () => {

    const date = new Date()

    const formattedHomeMonth = format(date, "LLLL")
    const formattedHomeDate = format(date, "do")
    const formattedHomeDay = format(date, "EEEE")

    return(
        <div className="home-date">
            <h2>{formattedHomeMonth} {formattedHomeDate}</h2>
            <h4>{formattedHomeDay}</h4>
        </div>
    )
}
export default HomeDate