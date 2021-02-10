import React from "react";
import { useSpring, animated } from "react-spring"
import Zone from './Zone'

const ZonesContainer = ({ currentUser, currentZones, setCurrentZones }) => {

    const fadeIn = useSpring({
      opacity: 1,
      marginTop: 0,
      from: { opacity: 0, marginTop: -1000 },
      delay: 250
    });

    const displayUserZones = currentZones.map(zone => {
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