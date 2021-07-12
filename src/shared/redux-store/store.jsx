import { createStore } from 'redux';
import rootReducer from './rootReducer';
import initialData from '../../components/initialData';

const data = {
    test: initialData
}

export default function configureStore(initialState = data) {
    return createStore(
        rootReducer, 
        initialState, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

}

