import React from 'react'
import { Container } from 'react-bootstrap'
import classes from './PostMessages.module.css'
import { Post } from './Post/Post'

export const PostMessages = (props) => {
    let postsElements = props.posts.map((post) => {
        return (
            <Post
                message={post.message}
                likeCount={post.likeCount}
            />
        )
    })
    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <Container>
            <div className={classes.header}>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
                {postsElements}
            </div>
        </Container>
    )
}

