import React, { Component } from 'react';

class MovieDetails extends Component {

    submit = () => {
        this.props.history.push('/')
    }
    back = () => {
        this.props.history.goBack()
    }

    render() {
        const { movie, loaded, favoris } = this.props
        return (
            <div className="text-center">
                <h2>Détail du film : {movie.title}</h2>
                <div>
                    <p>description : {movie.description}</p>
                    <br />
                    <span>{movie.detail} </span>
                </div>
                <div>
                    <button onClick={this.submit}>Aller à l'accueil</button>
                    <button onClick={this.back}>Retour à la page précédente</button>
                </div>

            </div>
        );
    }
}

export default MovieDetails;