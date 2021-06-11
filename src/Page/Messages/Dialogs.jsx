import React from 'react'
import { Container } from 'react-bootstrap'
import classes from './Dialogs.module.css'
import { DialogUser } from './DialogUser/DialogUser'
import { Messegas} from './MessagesItem/Messages'


export const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map((dialog) => {
        return (
            <DialogUser name={dialog.name} id={dialog.id} />
        )
    })

    let messagesElements = props.messagData.map((messages) => {
        return (
            <Messegas messag={messages.message} id={messages.id} />
        )
    })


    let newPostMessages = React.createRef()

    let addPostMessages = () => {
        let text = newPostMessages.current.value
        props.addPostMessages(text)
        newPostMessages.current.value = ''
    }

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
            <div className={classes.header}>
                <textarea ref={newPostMessages}></textarea>
                <div>
                    <button onClick={addPostMessages}>Add Post</button>
                </div>
            </div>
        </Container>
    )
}

