import React from 'react'
import { useSpring, animated } from "react-spring"
import TagForm from './TagForm'
import TagList from './TagList'



const TagsContainer = () => {

    const fadeIn = useSpring({
        opacity: 1,
        marginTop: 0,
        from: { opacity: 0, marginTop: -1000 },
        delay: 0
      });

    
    return (
        <animated.div style={fadeIn} className="tags-container">
            <h1>Tags Container</h1>
            <TagForm />
            <TagList />
        </animated.div>
    )
}

export default TagsContainer