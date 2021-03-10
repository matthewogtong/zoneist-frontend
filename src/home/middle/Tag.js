import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteTag } from "../../redux/user"
import { ReactComponent as Recycle } from "../../svg/nontrinkets/recycle.svg"

const Tag = ({ tag }) => {

    const dispatch = useDispatch()

    const userId = useSelector(state => state.user.entities[0].id)

    const handleEditTag = (tagId) => {
      console.log(tagId)
    }
 
    const handleDeleteTag = (tagId) => {
        fetch(`http://localhost:3001/users/${userId}/tags/${tagId}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedTag => {
            dispatch(deleteTag(deletedTag.id))
        })
    }
    return (
      <>
        <li key={tag.id}>
          {tag.name}
          <button onClick={e => handleEditTag(tag.id)}>
            ✏️
          </button>
          <Recycle onClick={e => handleDeleteTag(tag.id)}/>
        </li>
      </>
    );
}

export default Tag