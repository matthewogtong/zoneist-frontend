import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addZone } from "../../redux/user"
import { format } from "date-fns" 
import { useSpring, animated } from "react-spring"
import { useHistory } from "react-router-dom"
import { useForm } from 'react-hook-form'

const ZoneForm = () => {

    const { register, handleSubmit, errors } = useForm()

    let history = useHistory()

    const dispatch = useDispatch()

    const userId = useSelector(state => state.user.entities[0].id)

    const userTags = useSelector(state => state.user.entities[0].tags)

    const userRegions = useSelector(state => state.user.entities[0].regions)

    const userTrinkets = useSelector(state => state.user.entities[0].trinkets)

    const displayTagOptions = userTags.map(tag => {
        return (
            <option key={tag.id} value={tag.name}>{tag.name}</option>
        )
    })

    const displayRegionOptions = userRegions.map(region => {
        return (
            <option key={region.id} value={region.name}>{region.name}</option>
        )
    })

    const displayTrinketOptions = userTrinkets.map(trinket => {
        return (
            <option key={trinket.id} value={trinket.name}>{trinket.name}</option>
        )
    })

    const fadeIn = useSpring({
        opacity: 1,
        marginTop: 0,
        from: { opacity: 0, marginTop: -1000 },
        delay: 0
      })

    const onSubmit = (data) => {
      fetch(`http://localhost:3001/users/${userId}/zones`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          zoneStart: format(new Date(), "Pp"),
          zoneStartDate: new Date().getDate(),
          zoneStartMonth: new Date().getMonth(),
          zoneStartYear: new Date().getFullYear(),
          zoneStartHours: new Date().getHours(),
          zoneStartMinutes: new Date().getMinutes(),
          zoneStartSeconds: new Date().getSeconds(),
        }),
      })
        .then((r) => r.json())
        .then((newZone) => {
          dispatch(addZone(newZone))
          console.log(newZone)
          history.push("/in-the-zone")
        })
    }

    return (
      <animated.div style={fadeIn} className="zone-form">
        <form className="z-form" onSubmit={handleSubmit(onSubmit)}>
          <h3>define zone structure</h3>
          <label htmlFor="objective">Objective</label>
          <input
            type="text"
            id="objective"
            name="objective"
            ref={register({ required: true })}
          />
          {errors.objective && errors.objective.type === "required"}

          <label htmlFor="totalObjectiveTime">Minutes</label>
          <input
            type="number"
            id="totalObjectiveTime"
            name="totalObjectiveTime"
            ref={register({ required: true })}
          />
          {errors.totalObjectiveTime && errors.totalObjectiveTime.type === "required"}

          <label htmlFor="tag">Tag</label>
          <select
            name="tag"
            id="tag"
            ref={register({ required: true })}
          >
              <option value="">Select...</option>
              {displayTagOptions}
          </select>
          {errors.tag && errors.tag.type === "required"}

          <label htmlFor="region">Region</label>
          <select
            name="region"
            id="region"
            ref={register({ required: true })}
          >
              <option value="">Select...</option>
              {displayRegionOptions}
          </select>
          {errors.region && errors.region.type === "required"}

          <label htmlFor="trinket">Trinket</label>
          <select
            name="trinket"
            id="trinket"
            ref={register({ required: true })}
          >
              <option value="">Select...</option>
              {displayTrinketOptions}
          </select>
          {errors.trinket && errors.trinket.type === "required"}

          <button type="submit">start zone</button>
        </form>
      </animated.div>
    )
}

export default ZoneForm


// .log-in-container {
//   background: #0e101c;
//   border-radius: 25px;
//   grid-column: 9 / -2;
//   grid-row: 3 / -4;
//   display: flex;
//   flex-direction: column;
// }

// .log-in-container form {
//   max-width: 500px;
//   margin: 0 auto;
// }

// .log-in-container .log-in-h1 {
//   display: block;
//   margin: 10% auto;
//   width: 50%;
//   font-weight: 100;
//   color: white;
//   text-align: center;
//   padding-bottom: 10px;
//   border-bottom: 1px solid rgb(79, 98, 148);
// }

// .log-in-container input {
//   display: block;
//   margin: 10% auto;
//   box-sizing: border-box;
//   width: 100%;
//   border-radius: 4px;
//   border: 1px solid white;
//   padding: 10px 15px;
//   margin-bottom: 10px;
//   font-size: 14px;
// }

// .log-in-container button[type="submit"],
// .log-in-container input[type="submit"] {
//   background: #ec5990;
//   color: white;
//   text-transform: lowercase;
//   border: none;
//   margin-top: 40px;
//   padding: 20px;
//   font-size: 16px;
//   font-weight: 100;
//   letter-spacing: 10px;
// }