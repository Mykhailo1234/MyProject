import React from 'react'
import { Container } from 'react-bootstrap'
import classes from './Friends.module.css'
import { FriendsPost } from './FriendsPost/FriendsPost'

export const Friends = (props) => {
    
    let friendElements = props.friend.map((friends) => {
        return (
            <FriendsPost nameFriends={friends.nameFriends} />
        )
    })
    return (
        <Container>
            <div className={classes.profileFriends}>
                <h1>Friends</h1>
                {friendElements}
            </div>
        </Container>
    )
}
