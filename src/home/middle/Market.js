import React from 'react'
import { useSpring, animated } from "react-spring"
import MarketItem from './MarketItem'

const Market = () => {

    const fadeIn = useSpring({
        opacity: 1,
        marginTop: 0,
        from: { opacity: 0, marginTop: -1000 },
        delay: 250
      });

    return (
        <animated.div style={fadeIn} className="market">
            <h4 className="market-header">Market</h4>
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
            <MarketItem />
        </animated.div>
    )
}

export default Market