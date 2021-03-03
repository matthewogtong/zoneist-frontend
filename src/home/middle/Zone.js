import React from 'react'
import { format } from "date-fns"

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


  console.log(format(new Date(), 'Pp'))


  return (
    <div className={`${region.name.split(' ').join('')} completed-zone`}>
      <h2>{zoneStart}</h2>
      <p>{objective}</p>
    </div>
  );
};

export default Zone