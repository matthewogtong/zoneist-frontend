import React from 'react'
import { useSelector } from "react-redux"
import { ReactComponent as Token } from '../../svg/nontrinkets/token.svg'

const HomeTitle = () => {

    const tokens = useSelector(state => state.user.entities[0].tokens)


    return (
      <div className="home-title">
        <h2>zoneist</h2>
        <span className="home-title-token-svg">
          <Token />
        </span>
        <span className="home-title-tokens">
          {tokens}
        </span>
      </div>
    );
}

export default HomeTitle