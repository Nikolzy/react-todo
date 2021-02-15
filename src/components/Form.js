import React, { Fragment, useState, useContext } from "react"
import {AlertContext} from "../context/alert/alertContext"
import {FirebaseContext} from "../context/firebase/firebaseContext"

export const Form = () => {
    const [value, setValue] = useState('')

    const alert = useContext(AlertContext)
    const { addNote, removeNote } = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            addNote(value.trim()).then(() => {
                alert.show('Note was created!', 'success')
            }).catch(() => {
                alert.show('Something went wrong!', 'warning')
            })
            setValue('')
        } else {
            alert.show('Note title is required!')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Input"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}