import {createStore, applyMiddleware, combineReducers} from 'redux'
import testReducer from './reducers/testReducer'

const reducer = combineReducers({test: testReducer})

export const store = createStore(reducer)