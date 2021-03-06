import React, { useState } from 'react'
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

    const [formData, setFormData] = useState({
        objective: "",
        totalObjectiveTime: 0,
        tag: "",
        region: "",
        trinket: ""
    })

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

    const testOnSubmit = (data) => {

        console.log(data)

    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        fetch(`http://localhost:3001/users/${userId}/zones`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...formData,
                zoneStart: format(new Date(), 'Pp'),
                
            })
        })
            .then(r => r.json())
            .then(newZone => {
                dispatch(addZone(newZone))
                console.log(newZone)
                history.push("/in-the-zone")
            })
    }

    const handleChange = (event) => {
        const key = event.target.id

        let value = event.target.value
        
        setFormData({
            ...formData,
            [key]: value
        })
    }

    console.log(formData)

    return (
      <animated.div style={fadeIn} className="zone-form">
        <form className="z-form" onSubmit={handleSubmit(testOnSubmit)}>
          <h3>add new zone</h3>

          <label htmlFor="objective">Objective</label>
          <input
            type="text"
            id="objective"
            name="objective"
            value={formData.objective}
            onChange={handleChange}
            ref={register({ required: true })}
          />
          {errors.objective && errors.objective.type === "required" && (
          <p>
              This is required
          </p>
          )}

          <label htmlFor="totalObjectiveTime">Minutes</label>
          <input
            type="number"
            id="totalObjectiveTime"
            name="totalObjectiveTime"
            value={formData.totalObjectiveTime}
            onChange={handleChange}
            ref={register({ required: true })}
          />

          <label htmlFor="tag">Tag</label>
          <select
            name="tag"
            id="tag"
            value={formData.tag}
            onChange={handleChange}
            ref={register({ required: true })}
          >
              <option value="" disabled></option>
              {displayTagOptions}
          </select>

          <label htmlFor="region">Region</label>
          <select
            name="region"
            id="region"
            value={formData.region}
            onChange={handleChange}
            ref={register({ required: true })}
          >
              <option value="" disabled></option>
              {displayRegionOptions}
          </select>

          <label htmlFor="trinket">Trinket</label>
          <select
            name="trinket"
            id="trinket"
            value={formData.trinket}
            onChange={handleChange}
            ref={register({ required: true })}
          >
              <option value="" disabled></option>
              {displayTrinketOptions}
          </select>

          <button type="submit">Enter Zone</button>
        </form>
      </animated.div>
    );
}

export default ZoneForm