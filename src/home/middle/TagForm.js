import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';

const TagForm = () => {

    const [tagName, setTagName] = useState("")

    console.log(tagName)

    const handleTagSubmit = (e) => {
        e.preventDefault()
        console.log("yo")
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