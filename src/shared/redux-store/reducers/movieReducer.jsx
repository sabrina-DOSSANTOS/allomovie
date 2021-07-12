import { GET_MOVIE } from './../actions/movieAction';
import initialData from './../../../components/initialData';

/**
 * 
 * for movie :
 *   - get movies
 * 
 * @author sabrina ds
 */

const MovieReducer = (state = initialData, action) => {
    switch (action.type) {
        case GET_MOVIE:
            return {
                ...state
            }

        default:
            return state
    }
};

export default MovieReducer;