import React from 'react'
import { Container } from 'react-bootstrap'
import classes from './PostMessages.module.css'
import { Post } from './Post/Post'

export const PostMessages = (props) => {

    let posts = [
        { id: 1, message: 'Hi', likesCount: 0},
        { id: 2, message: 'Hisdh', likesCount: 1}
    ]

    let postsElements = posts.map((post) => {
        return (
            <Post message={post.message} likeCount={post.likeCount} />
        )
    })

    return (
        <Container>
            <div className={classes.header}>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                </div>
                {postsElements}
            </div>
        </Container>
    )
}

