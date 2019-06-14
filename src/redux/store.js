import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'
import projectReducer from './projectReducer'
import adminReducer from './adminReducer'

const rootReducer = combineReducers({
  user:userReducer,
  project:projectReducer,
  admin:adminReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))