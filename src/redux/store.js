import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers/index'

export default store = createStore(Reducer, undefined, applyMiddleware(thunk));