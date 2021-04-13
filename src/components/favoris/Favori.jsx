import React, { Component } from 'react';
import { FavoriElement, Loader } from '..';
import { Container, Row } from 'react-bootstrap';


class Favori extends Component {
    render() {
        const { movie, loaded, favoris } = this.props
        if (!loaded) return <Loader />

        return (
            <Container >
                <h3 className="text-center mt-3 mb-3 text-warning">Mes favoris</h3>
                <Row>

                    {favoris.length > 0 ? (favoris.map((f, index) => (
                        <FavoriElement
                            {...this.props}
                            key={index}
                            favoris={f}
                        />
                    )
                    )) : (
                        <h4 className="text-center mt-5 ">Pas de favori enregistré</h4>
                    )}

                </Row>
            </Container>
        );
    }
}

export default Favori;