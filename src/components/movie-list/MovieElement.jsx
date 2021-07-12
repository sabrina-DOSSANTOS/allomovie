import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import nonDispo from './../../asset/nonDispo.jpg';

class MovieElement extends Component {

    render() {

        const { movie, loaded, favoris } = this.props
        console.log(loaded)

        return (
            <Col xs={12} md={6} lg={4} xls={3}>
                <Card
                    text={'grey'}
                    style={{ width: '22rem' }}
                    className="mb-3 bg-light"
                >

                    <Card.Img src={movie.img === 'https://image.tmdb.org/t/p/w500null' ? (nonDispo) : (movie.img)} />

                    <Card.Body>

                        <Card.Title> {movie.title} </Card.Title>

                        <Card.Text >
                            Date de sortie : {movie.details}
                        </Card.Text>

                        <div className="container fluid justify-content-center">

                            <Button className="ml-4 mr-4" onClick={() => { this.props.supp(movie.title) }}variant="warning" >Détail</Button>

                            {this.props.isFavori ? (

                                <Button variant="danger" onClick={() => { this.props.supp(movie.title) }} > < FaHeart /> Retirer</Button>
                            ) : (
                                <Button variant="info" onClick={() => { this.props.add(movie.title) }}>< FaRegHeart /> Ajouter </Button>
                            )}

                        </div>

                    </Card.Body>

                </Card>
            </Col>
        );
    }
}

export default MovieElement;