import React from 'react'
import classes from './../Dialogs.module.css'

export const Messegas = (props) => {
    return (
        <div className={classes.messages}>{props.messag}</div>
    )
}



