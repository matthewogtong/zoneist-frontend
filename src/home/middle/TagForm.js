import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { InputText } from 'primereact/inputtext'

const TagForm = ({ currentUser, currentTags, setCurrentTags }) => {

    const userId = useSelector(state => state.user.entities[0].id)

    const [tagName, setTagName] = useState("")

    const handleTagSubmit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:3001/users/${userId}/tags`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: userId,
                name: tagName
            })
        })
            .then(r => r.json())
            .then(newTag => {
                const updatedTags = [...currentTags, newTag]
                setCurrentTags(updatedTags)
            })
        
        setTagName("")
    }

    return (
      <form onSubmit={handleTagSubmit} className="tag-form">
        <span className="p-float-label">
          <InputText
            id="tagName"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
          />
          <label htmlFor="tagName">Tag Name</label>
        </span>
        <input type="submit" value="Submit" />
      </form>
    );
}

export default TagForm