import React from 'react'


// let styles = {
//     cursor: `pointer`,
//     borderRadius: `15px`,
//     height: `100%`,
//     backgroundSize: `cover`,
//     display: `flex`,
//     flexDirection: `column`,
//     alignItems: `center`,
//     justifyContent: `center`,
//     textAlign: `center`,
//     transition: `all .5s ease-in`
//   }

const Zone = ({
  isActive,
  isComplete,
  objective,
  zoneStart,
  zoneEnd,
  prematureEnd,
  totalObjectiveTime,
  tag,
  trinket,
  region,
}) => {

    

  return (
    <div className={`${region.name} completed-zone`}>
      <h2>{zoneStart}</h2>
      <p>{objective}</p>
    </div>
  );
};

export default Zone