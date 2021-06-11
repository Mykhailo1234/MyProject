import React from 'react';
import { Container } from 'react-bootstrap';
import classes from './Post.module.css'


export const Post = (props) => {
    return (
        <Container>
            <div className={classes.item}>
                <img src='https://s.ill.in.ua/i/news/640x344/450/450102.jpg' />
                {props.message}
            </div>
            <div>
                <span>like</span>
            </div>
        </Container>
    )
}



