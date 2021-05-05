import React from "react"
import { useSpring, animated } from "react-spring"
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'

import { ReactComponent as Brain } from '../svg/nontrinkets/brain.svg'
import { ReactComponent as Spanner } from '../svg/nontrinkets/spanner.svg'
import { ReactComponent as Achieve } from '../svg/nontrinkets/achieve.svg'

const AboutPage = () => {

    const fadeInHeader = useSpring({
        opacity: 1,
        marginLeft: 150,
        from: { opacity: 0, marginLeft: -500 },
        delay: 100,
        duration: 500
      })

    const fadeInFirst = useSpring({
      opacity: 1,
      marginLeft: 0,
      from: { opacity: 0, marginLeft: -500 },
      delay: 100,
      duration: 500
    })

    const fadeInSecond = useSpring({
      opacity: 1,
      marginLeft: 0,
      from: { opacity: 0, marginLeft: -500 },
      delay: 300,
      duration: 500
    })

    const fadeInThird = useSpring({
      opacity: 1,
      marginLeft: 0,
      from: { opacity: 0, marginLeft: -500 },
      delay: 500,
      duration: 500
    })
    
    return (
        <div className="about-page">
            <animated.h1 style={fadeInHeader} className="about-header">zoneist</animated.h1>
            <animated.nav  style={fadeInFirst} className="about-nav">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button className="button-dark">Title</Button>
                </Link>
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <Button className="button-bright">Home</Button>
                </Link>
            </animated.nav>
            <animated.div  style={fadeInFirst}className="about-focus p-shadow-20">
                <h1>FOCUS</h1>
                <p>From time to time it can be incredibly difficult and frustrating to focus on anything. Finding your ‘Zone’ is much easier said than done. I found that whether I am studying or working, I like to visualize my progress. zoneist is here to help with those major daily tasks that are alway so difficult to start. </p>
                <Brain className="about-trinket" />
            </animated.div>
            <animated.div  style={fadeInSecond}className="about-customize p-shadow-20">
                <h1>CUSTOMIZE</h1>
                <p>Structure and design your own 'Zones' with some very popular destinations set as regions, customizable tags as well as with some cute trinkets. Shop for a variety of customizations in the market with your hard earned tokens from completing 'Zones'.</p>
                <Spanner className="about-trinket"/>
            </animated.div>
            <animated.div  style={fadeInThird}className="about-achieve p-shadow-20">
                <h1>ACHIEVE</h1>
                <p>You will have access to a calendar where you can pin point any day you’ve completed 'Zones' and see what you have accomplished for that day. Every goal starts with a step and being able to track your big goals throughout the day can be a very important step to your own roadmap.</p>
                <Achieve className="about-trinket"/>
            </animated.div>
        </div>  
    )
}

export default AboutPage