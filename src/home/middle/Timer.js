import React, { useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTime, leaveZone, completeZone, enterZone } from "../../redux/user"

const Timer = () => {
  const currentZone = useSelector(
    (state) => state.user.entities[0].zones.slice(-1)[0]
  )

  const dispatch = useDispatch()
  let interval = useRef()

  const userId = useSelector((state) => state.user.entities[0].id)

  const add = currentZone.totalObjectiveTime * 60000
  const showHours = useSelector((state) => state.user.time.timerHours)
  const showMinutes = useSelector((state) => state.user.time.timerMinutes)
  const showSeconds = useSelector((state) => state.user.time.timerSeconds)

  const isInZone = useSelector((state) => state.user.inZone)
  console.log(isInZone)

  const startTimer = () => {
    const countdownDate = new Date().getTime() + add

    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now
      console.log(distance)

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      const timeArr = [hours, minutes, seconds]
      if (distance < 0) {
        dispatch(leaveZone())
        clearInterval(interval)
        dispatch(completeZone(currentZone))
        fetch(`http://localhost:3001/users/${userId}/zones/${currentZone.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            isActive: false,
            isComplete: true,
          }),
        })
          .then((r) => r.json())
          .then((data) => console.log(data))
      } else {
        dispatch(setTime(timeArr))
      }
    }, 1000)
  }
  //componentDidMount
  useEffect(() => {
    if (!isInZone && currentZone.isActive) {
      dispatch(enterZone())
      startTimer()
    //   return () => {
    //     clearInterval(interval)
    //   }
    }
  }, [])

  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span></span>
          <h2>time left</h2>
        </div>
        <div>
          <section>
            <p>{showHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{showMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{showSeconds}</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  )
}

export default Timer
