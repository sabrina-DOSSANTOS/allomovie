
import { Component } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';
import { apiFirebase, apiMovie, Favori, FormInscription, Header, MapMovieApi, MovieDetails, MovieRecup } from '../components';
import { BrowserRouter } from 'react-router-dom';


class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            loaded: false,
            favoris: null
        }
    }

    updateFavoris = (newFavoris) => {
        this.setState({
            favoris: newFavoris,
            loaded: this.state.movies ? (true) : (false)
        })
    }

    updateMovies = (newMovies) => {
        this.setState({
            movies: newMovies,
            loaded: this.state.favoris ? (true) : (false)
        })
    }

    // AddFavoris = (titre) => {
    //     const favorisajoute= [...this.state.favoris]
    //     const film = this.state.movies.find(f => f.title === titre)
    //     favorisajoute.push(film)
    //     this.setState({favoris: favorisajoute}, () => {
    //         this.saveFav()
    //     })
    // }

    // suppFavoris = (titre) => {
    //     const favorisASupp= [...this.state.favoris]
    //     const index = this.state.favoris.findIndex(f => f.title===titre)
    //     favorisASupp.splice(index, 1)
    //     this.setState({favoris: favorisASupp}, () => {
    //         this.saveFav()
    //     })
    // }

    // saveFav = () => {
    //     apiFirebase.put('favoris.json', this.state.favoris)
    // }

    componentDidMount() {
        apiMovie.get('/discover/movie')
            .then(response => response.data.results)
            .then(apimovies => {
                const movies = apimovies.map(MapMovieApi)
                this.updateMovies(movies)
                this.setState({loaded:true})
            }
            )
            .catch(err => console.log(err))

        // apiFirebase.get('favoris.json')
        //     .then(response => {
        //         let favoris = response.data ? response.data : [];
        //         this.updateFavoris(favoris)
        //     })
    }

    render() {

        const { movies, loaded, favoris } = this.state
  

        return (
            
            <BrowserRouter>
                  
                <Header updateMovies={this.updateMovies} loaded={loaded} />
                <Switch >

                    <Route exact path='/' render={(props) => {
                        
                        return (
                            <MovieRecup
                                {...props}
                                movies={movies}
                                loaded={loaded}
                                favoris={favoris}
                                updateMovies={this.updateMovies}
                                updateFavoris={this.updateFavoris}
                                add={this.AddFavoris}
                                supp={this.suppFavoris}
                            />
                            
                        )
                    }}
                    />
                    <Route path='/detail' component={MovieDetails} />
                    <Route path='/inscription' component={FormInscription} />

                    <Route path='/favoris' render={(props) => {
                        return (
                            <Favori
                                {...props}
                                movies={movies}
                                loaded={loaded}
                                favoris={favoris}
                                updateMovies={this.updateMovies}
                                updateFavoris={this.updateFavoris}
                                add={this.AddFavoris}
                                supp={this.suppFavoris}
                            />
                        )
                    }} 

                     /> 
                    {/* <Route component={Error} /> */}
                </Switch>
            </BrowserRouter>

        );
    }
}

export default Routes