import React from 'react'

const Tag = ({ currentUser, currentTags, setCurrentTags, name, id }) => {

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