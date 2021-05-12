import React from 'react'
import { Container } from 'react-bootstrap'
import classes from './Dialogs.module.css'
import { DialogUser } from './DialogUser/DialogUser'
import { Messegas} from './MessagesItem/Messages'


export const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "Inna" },
        { id: 2, name: "Misha" },
        { id: 3, name: "Vadim" },
        { id: 4, name: "Yulia" }
    ]

    let messagData = [
        { id: 1, name: "Hi!" },
        { id: 2, name: "How are you?" },
        { id: 3, name: "It's good" },
        { id: 4, name: "Ok" }
    ]


    let dialogsElements = dialogsData.map((dialog) => {
        return (
            <DialogUser name={dialog.name} id={dialog.id} />
        )
    })

    let messagesElements = messagData.map((messages) => {
        return (
            <Messegas messag={messages.name} id={messages.id} />
        )
    })


    return (
        <Container>
            <div className={classes.dialogs}>

                <div className={classes.users}>
                    {dialogsElements}
                </div>

                <div className={classes.messegas_users}>
                    {messagesElements}
                </div>

            </div>
        </Container>
    )
}

