import root from './reducers';
import { createStore } from 'redux';

export default createStore(root, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());