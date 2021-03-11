import React from "react"
import { useSpring, animated } from "react-spring"
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'

import { ReactComponent as Brain } from '../svg/nontrinkets/brain.svg'
import { ReactComponent as Spanner } from '../svg/nontrinkets/spanner.svg'
import { ReactComponent as Achieve } from '../svg/nontrinkets/achieve.svg'

const AboutPage = () => {

    const fadeInFirst = useSpring({
      opacity: 1,
      marginLeft: 0,
      from: { opacity: 0, marginLeft: -1000 },
      delay: 100,
      duration: 500
    })

    const fadeInSecond = useSpring({
      opacity: 1,
      marginLeft: 0,
      from: { opacity: 0, marginLeft: -1000 },
      delay: 300,
      duration: 500
    })

    const fadeInThird = useSpring({
      opacity: 1,
      marginLeft: 0,
      from: { opacity: 0, marginLeft: -1000 },
      delay: 500,
      duration: 500
    })
    
    return (
        <div className="about-page">
            <animated.h1 style={fadeInFirst} className="about-header">zoneist</animated.h1>
            <animated.nav  style={fadeInFirst} className="about-nav">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button className="button-dark">Title</Button>
                </Link>
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <Button className="button-bright">Home</Button>
                </Link>
            </animated.nav>
            <animated.div  style={fadeInFirst}className="about-focus p-shadow-8">
                <h1>FOCUS</h1>
                <p>some content</p>
                <Brain className="about-trinket" />
            </animated.div>
            <animated.div  style={fadeInSecond}className="about-customize p-shadow-8">
                <h1>CUSTOMIZE</h1>
                <p>some content</p>
                <Spanner className="about-trinket"/>
            </animated.div>
            <animated.div  style={fadeInThird}className="about-achieve p-shadow-8">
                <h1>ACHIEVE</h1>
                <p>some content</p>
                <Achieve className="about-trinket"/>
            </animated.div>
        </div>  
    )
}

export default AboutPage