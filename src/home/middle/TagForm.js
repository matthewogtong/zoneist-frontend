import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTag } from "../../redux/user"
import { InputText } from 'primereact/inputtext'
import { useForm } from 'react-hook-form'

const TagForm = () => {

    const { register, handleSubmit, errors } = useForm()

    const state = useSelector(state => state)

    console.log(state)

    const dispatch = useDispatch()

    const userId = useSelector(state => state.user.entities[0].id)

    const [tagName, setTagName] = useState("")

    const onSubmit = (data) => {
      console.log(data)
    }

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
                dispatch(addTag(newTag))
                console.log(newTag)
            })
        
        setTagName("")
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="tag-form">
        <span className="p-float-label">
          <InputText
            id="tagName"
            name="tagName"
            // value={tagName}
            // onChange={(e) => setTagName(e.target.value)}
            ref={register({ required: true })}
          />
           {errors.tagName && errors.tagName.type === "required" && (
          <p className="zone-form-error">
              This is required
          </p>
          )}
          <label htmlFor="tagName">Tag Name</label>
        </span>
        <input type="submit" value="Submit" />
      </form>
    );
}

export default TagForm