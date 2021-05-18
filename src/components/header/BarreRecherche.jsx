import { Formik } from 'formik';
import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { apiMovie } from '..';
import { MapMovieApi } from '../api/apimovie';


class BarreRecherche extends Component {

    submit = (values, actions) => {

        const query = '?' + Object.keys(values).map(k => `${k}=${values[k]}&`).join('')
        apiMovie.get('/search/movie' + query)
            .then(response => response.data.results)
            .then(apiMovie => {
                const movies = apiMovie.map(MapMovieApi)
                actions.setSubmitting(false)
                movies.length > 0 ? (
                    this.props.updateMovies(movies)
                ) : (
                    // <ErrorSearch/>
                    alert('Pas de film existant')
                )

            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Formik onSubmit={this.submit}
                initialValues={{
                    query: '',
                    language: 'en-US'
                }}
            >
                { ({ handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                    < div className="container-w-100 justify-content-end" >
                        <Form className="" inline onSubmit={handleSubmit}>

                            <FormControl name="query" type="text" placeholder="Rechercher un film" className="w-80 mr-sm-2" onChange={handleChange} onBlur={handleBlur} />
                            <select className="mr-2 form-control w-35" name="language" onChange={handleChange} onBlur={handleBlur}>
                                <option value="en-US"> Anglais </option>
                                <option value="fr-FR"> Français </option>
                            </select>

                            <Button variant="outline-info" type="submit" disabled={isSubmitting}> <BsSearch /> </Button>
                        </Form>
                    </div>

                )
                }
            </Formik>

        );
    }
}

export default BarreRecherche;