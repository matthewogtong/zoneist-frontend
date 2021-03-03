import React from 'react'
import { useSelector } from "react-redux"

const Tag = ({ currentUser, currentTags, setCurrentTags, name, id }) => {

    const userId = useSelector(state => state.user.entities[0].id)
 
    const handleDeleteTag = (tagId) => {
        fetch(`http://localhost:3001/users/${currentUser.id}/tags/${tagId}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedTag => {
            const updatedTags = currentTags.filter(tag => tag.id !== tagId)
            setCurrentTags(updatedTags)
        })
    }
    return (
      <>
        <li key={id}>
          {name}
          <button key={id} onClick={e => handleDeleteTag(id)}>
            🗑
          </button>
        </li>
      </>
    );
}

export default Tag