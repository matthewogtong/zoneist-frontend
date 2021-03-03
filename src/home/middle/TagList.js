import React from 'react'
import Tag from './Tag'
import { useSelector } from "react-redux"

const TagList = () => {

    const tags = useSelector(state => state.user.entities[0].tags)
    console.log(tags)

    const displayTags = tags.map(tag => {
        return (
          <Tag
            key={tag.id}
            tag={tag}
          />
        );
    })

    return (
        <div className="tag-list">
            <ul>
                {displayTags}
            </ul>
        </div>
    )
}

export default TagList