import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Market from './Market'
import ZonesCont from './ZonesCont'
import ZonesContainer from './ZonesContainer'

const Middle = ({ currentUser }) => {

    console.log(currentUser.zones)
    return (
      <div className="home-middle p-shadow-8">
          <ZonesCont />
        {/* <Switch>
          <Route path="/market">
            <Market />
          </Route>
          <Route path="/zones">
            <ZonesContainer />
          </Route>
        </Switch> */}
      </div>
    );
}

export default Middle