import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'
import ZonesContainer from './middle/ZonesContainer'

const HomePage = () => {
    return (
      <>
        <h1>This Home Page</h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button label="Title" />
        </Link>
        <ZonesContainer />
      </>
    );
}

export default HomePage