import React from 'react';
import { Container } from 'react-bootstrap';
import classes from './News.module.css'

export const News = () => {
    return (
        <Container>
            <div className={classes.header}><h1>Page  News</h1></div>
        </Container>
    )
}

