import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { MovieRecup } from '..';


class MovieList extends Component {
    render() {
        return (
            <Container fluid>
                <MovieRecup />
            </Container>

        );
    }
}

export default MovieList;