import React from "react";
import { useSpring, animated } from "react-spring"
import Zone from './Zone'
import { useSelector } from "react-redux"
import { Card } from 'primereact/card'


const ZonesContainer = () => {

    const zoneState = useSelector(state => state.user)
    const zonesToday = useSelector(state => state.user.zonesToday)
    const zonesToDisplay = useSelector(state => state.user.zonesToDisplay)


    console.log(zoneState)
    console.log(zonesToDisplay)

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
      {zonesToday ? (
        displayUserZones
      ) : (
        <Card className="no-zones-today p-shadow-8">
          <p>you have not completed any zones this day</p>
        </Card>
      )}
    </animated.ul>
  );
};

export default ZonesContainer