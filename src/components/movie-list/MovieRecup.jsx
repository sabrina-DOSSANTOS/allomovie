import React, { Component } from 'react';
import { apiMovie, Loader, MovieElement } from '..';
import { Col, Container, Row } from 'react-bootstrap';

class MovieRecup extends Component {

    render() {
        const { movies, loaded, favoris } = this.props

        if (!loaded) return <Loader />
   
        return (
            <Container  >
                <h2 className="text-center mt-3 mb-4 text-warning" >Les films à découvrir...</h2>
                <Row>
                    {movies.map((m, index) => (
                        <MovieElement
                            {...this.props}
                            key={index}
                            movie={m}
                            add={this.props.add}
                            supp={this.props.supp}
                            // isFavori={favoris.map(f => f.title).includes(m.title)}
                        />
                    )
                    )}
                </Row>
            </Container>
        );
    }
}

export default MovieRecup;