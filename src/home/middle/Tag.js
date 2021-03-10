import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteTag } from "../../redux/user"
import ReactCardFlip from 'react-card-flip'

import { ReactComponent as Bin } from "../../svg/nontrinkets/bin.svg"


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
          <Bin className="tag-bin" onClick={e => handleDeleteTag(tag.id)}/>
          {tag.name}        
        </li>
      </>
    );
}

export default Tag