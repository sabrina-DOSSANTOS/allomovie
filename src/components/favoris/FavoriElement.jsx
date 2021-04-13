import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

class FavoriElement extends Component {
    render() {

        const { movie, loaded, favoris } = this.props
        console.log(favoris)
        return (
            
                <Col xs={12} md={4} lg={3}>
                    <Card
                        border={'warning'}
                        text={'grey'}
                        style={{ width: '17rem' }}
                        className="mb-3"
                    >

                        <Card.Img src={favoris.img} />

                        <Card.Body>

                            <Card.Title > {favoris.title} </Card.Title>

                            <Card.Text >
                                Date de sortie : {favoris.details}
                            </Card.Text>

                            <div className="container fluid justify-content-center">

                                <Button className="mr-3" variant="warning" >Détail</Button>

                                <Button variant="danger" onClick={() => { this.props.supp(favoris.title) }} > <FaRegHeart /> Retirer</Button>


                            </div>

                        </Card.Body>

                    </Card>
                </Col>
           
        );
    }
}

export default FavoriElement;