import React from 'react'
import { Container } from 'react-bootstrap'
import classes from './PostMessages.module.css'
import { Post } from './Post/Post'

export const PostMessages = (props) => {
    return (
        <Container>
            <div className={classes.header}>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                </div>
                <Post message="Hi, how are you?"/>
                <Post message="It's good!"/>
            </div>
        </Container>
    )
}

