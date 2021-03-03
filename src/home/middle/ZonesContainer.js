import React from "react";
import { useSpring, animated } from "react-spring"
import Zone from './Zone'
import { useSelector } from "react-redux"


const ZonesContainer = () => {

    const zones = useSelector(state => state.user.entities[0].zones)

    const fadeIn = useSpring({
      opacity: 1,
      marginTop: 0,
      from: { opacity: 0, marginTop: -1000 },
      delay: 0
    });

    const displayUserZones = zones.map(zone => {
      return (
        <Zone
          key={zone.id}
          isActive={zone.isActive}
          isComplete={zone.isComplete}
          objective={zone.objective}
          zoneStart={zone.zoneStart}
          zoneEnd={zone.zoneEnd}
          prematureEnd={zone.prematureEnd}
          totalObjectiveTime={zone.totalObjectiveTime}
          tag={zone.tag}
          trinket={zone.trinket}
          region={zone.region}
        />
      );
    })

  return (
    <animated.div style={fadeIn} className="zones-container">
      {displayUserZones}
    </animated.div>
  );
};

export default ZonesContainer