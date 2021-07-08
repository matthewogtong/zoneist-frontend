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
      const add = data.totalObjectiveTime * 60000
      const expectedZoneEnd = new Date().getTime() + add
      fetch(`https://zoneist.herokuapp.com/users/${userId}/zones`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          zoneStart: format(new Date(), "Pp"),
          zoneEnd: expectedZoneEnd,
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
            ref={register({ required: true, min: 0 })}
          />
          {errors.totalObjectiveTime && errors.totalObjectiveTime.type === "required"}

          <label htmlFor="tag">{userTags.length === 0 ? <span class="not-available-zone-form">Tag (not available - create a tag)</span> : 'Tag'}</label>
          <select
            name="tag"
            id="tag"
            ref={register({ required: true })}
          >
              <option value="">Select...</option>
              {displayTagOptions}
          </select>
          {errors.tag && errors.tag.type === "required"}

          <label htmlFor="region">{userRegions.length === 0 ? <span class="not-available-zone-form">Region (not available - purchase a region)</span> : 'Region'}</label>
          <select
            name="region"
            id="region"
            ref={register({ required: true })}
          >
              <option value="">Select...</option>
              {displayRegionOptions}
          </select>
          {errors.region && errors.region.type === "required"}

          <label htmlFor="trinket">{userTrinkets.length === 0 ? <span class="not-available-zone-form">Trinket (not available - purchase a trinket)</span> : 'Trinket'}</label>
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
