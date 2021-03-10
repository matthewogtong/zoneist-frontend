import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTag } from "../../redux/user"
import { InputText } from 'primereact/inputtext'
import { useForm } from 'react-hook-form'

const TagForm = () => {

    const { register, handleSubmit, errors } = useForm()

    const currentTags = useSelector(state => state.user.entities[0].tags)

    const currentTagNames = (currentTags.map(tag => tag.name))

    const dispatch = useDispatch()

    const userId = useSelector(state => state.user.entities[0].id)

    const validateTagUniqueness = (value) => {
      if (currentTagNames.includes(value)) {
        return false
      } else {
        return true
      }
    }

    const onSubmit = (data) => {
      fetch(`http://localhost:3001/users/${userId}/tags`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: userId,
                name: data.tagName
            })
        })
            .then(r => r.json())
            .then(newTag => {
                dispatch(addTag(newTag))
                console.log(newTag)
            })
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="tag-form">
        <span className="p-float-label">
          <InputText
            id="tagName"
            name="tagName"
            ref={register({ required: true, validate: validateTagUniqueness })}
          />
           {errors.tagName && errors.tagName.type === "required" && (
          <p className="zone-form-error">
              This is required
          </p>
          )}
          {errors.tagName && errors.tagName.type === "validate" && (
          <p className="zone-form-error">
              This tag already exists
          </p>
          )}
          <label htmlFor="tagName">create tag</label>
        </span>
        <input type="submit" value="Submit" />
      </form>
    );
}

export default TagForm