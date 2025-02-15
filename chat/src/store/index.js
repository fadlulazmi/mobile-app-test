import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer.js'
import thunk from 'redux-thunk'

let store = createStore(reducer, applyMiddleware(thunk))

export default store