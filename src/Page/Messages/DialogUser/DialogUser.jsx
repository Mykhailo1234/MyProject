import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './../Dialogs.module.css'

export const DialogUser = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={classes.user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


