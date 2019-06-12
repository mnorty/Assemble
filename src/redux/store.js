import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'
import projectReducer from './projectReducer'

const rootReducer = combineReducers({
  user:userReducer,
  project:projectReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))