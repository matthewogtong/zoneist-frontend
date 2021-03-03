import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteTag } from "../../redux/tag"

const Tag = ({ tag }) => {

    const dispatch = useDispatch()

    const userId = useSelector(state => state.user.entities[0].id)
 
    const handleDeleteTag = (tagId) => {
        fetch(`http://localhost:3001/users/${userId}/tags/${tagId}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedTag => {
            dispatch(deleteTag(deletedTag))
        })
    }
    return (
      <>
        <li key={tag.id}>
          {tag.name}
          <button key={tag.is} onClick={e => handleDeleteTag(tag.id)}>
            🗑
          </button>
        </li>
      </>
    );
}

export default Tag