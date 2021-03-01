import React from 'react'
import Tag from './Tag'

const TagList = ({ currentUser, currentTags, setCurrentTags }) => {




    const displayTags = currentTags.map(tag => {
        return (
          <Tag
            key={tag.id}
            name={tag.name}
            id={tag.id}
            currentTags={currentTags}
            setCurrentTags={setCurrentTags}
            currentUser={currentUser}
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