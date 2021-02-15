import React, { Fragment, useContext, useEffect } from "react"
import {Form} from "../components/Form"
import {Notes} from "../components/Notes"
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../components/Loader";
import {AlertContext} from "../context/alert/alertContext";

export const Home = () => {

    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)
    const {show} = useContext(AlertContext)

    useEffect(() => {
        fetchNotes()
    }, [])

    const onRemove = (id) => {
        removeNote(id)
        show('Note was deleted!', 'primary')
    }

    return (
        <Fragment>
            <Form />

            {loading
                ? <Loader />
                : <Notes notes={notes} onRemove={onRemove}/>

            }
        </Fragment>
    )
}