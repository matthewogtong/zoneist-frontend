import React from "react";
import { useSpring, animated } from "react-spring"
import Zone from './Zone'
import { useSelector } from "react-redux"


const ZonesContainer = () => {

    const zoneState = useSelector(state => state.user)
    console.log(zoneState)

    const zonesToday = useSelector(state => state.user.zonesToday)
    const zonesToDisplay = useSelector(state => state.user.zonesToDisplay)

    const fadeIn = useSpring({
      opacity: 1,
      marginTop: 0,
      from: { opacity: 0, marginTop: -1000 },
      delay: 0
    });

    const displayUserZones = zonesToDisplay.map(zone => {
        return (
          <li key={zone.id}>
            <Zone
            key={zone.id}
            objective={zone.objective}
            zoneStart={zone.zoneStart}
            zoneEnd={zone.zoneEnd}
            totalObjectiveTime={zone.totalObjectiveTime}
            tag={zone.tag}
            trinket={zone.trinket}
            region={zone.region}
          />
          </li>
        );
      }
    )

  return (
    <animated.ul style={fadeIn} className="zones-container">
        {zonesToday ? displayUserZones : <li>you have no completed zones today</li>}
    </animated.ul>
  );
};

export default ZonesContainer