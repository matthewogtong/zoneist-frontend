import React from "react";
import { useSpring, animated } from "react-spring"

const ZonesCont = () => {

    const fadeIn = useSpring({
      opacity: 1,
      marginTop: 0,
      from: { opacity: 0, marginTop: -1000 },
      delay: 500
    });

  return (
    <animated.div style={fadeIn} className="zones-container">
      <div className="bg1">
        <h2>
          Time
        </h2>
        <p>Objective</p>
      </div>
      <div className="bg1">
        <h2>
          Time
        </h2>
        <p>Objective</p>
      </div>
      <div className="bg2">
        <h2>
          Time
        </h2>
        <p>Objective</p>
      </div>
      <div className="bg1">
        <h2>Time</h2>
        <p>Objective</p>
      </div>
      <div className="bg1">
        <h2>
          Time
        </h2>
        <p>Objective</p>
      </div>
      <div className="bg2">
        <h2>
          Time
        </h2>
        <p>Objective</p>
      </div>
      <div className="bg1">
        <h2>
          Time
        </h2>
        <p>Objective</p>
      </div>
      <div className="bg1">
        <h2>
          Time
        </h2>
        <p>Objective</p>
      </div>
      <div className="bg2">
        <h2>
          Time
        </h2>
        <p>Objective</p>
      </div>
      <div className="bg2">
        <h2>
          Time
        </h2>
        <p>Objective</p>
      </div>
      <div className="bg2">
        <h2>
          Time
        </h2>
        <p>Objective</p>
      </div>
      <div className="bg2">
        <h2>
          Time
        </h2>
        <p>Objective</p>
      </div>
    </animated.div>
  );
};

export default ZonesCont