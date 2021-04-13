import React, { Component } from 'react';

class MovieDetails extends Component {

    submit = ( ) => {
        this.props.history.push('/')
    }

    back = ( ) => {
        this.props.history.goBack()
    }
    
    render() {
        return (
            <div className="text-center">
            <h1>Détail film</h1>
            <button onClick={this.submit}>Aller à l'accueil</button>
            <button onClick={this.back}>Retour à la page précédente</button>
        </div>
        );
    }
}

export default MovieDetails;