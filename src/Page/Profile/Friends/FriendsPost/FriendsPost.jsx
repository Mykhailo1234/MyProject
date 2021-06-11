import React from 'react';
import { Container } from 'react-bootstrap';
import classes from '../Friends.module.css'


export const FriendsPost = (props) => {
    return (
        <Container>
            <div className={classes.profileFriendsImg}>
                <div className={classes.item}>
                    <img src='https://s.ill.in.ua/i/news/640x344/450/450102.jpg' />
                    {props.nameFriends}
                </div>
            </div>
        </Container>
    )
}