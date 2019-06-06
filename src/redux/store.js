import {createStore, combineReducers} from 'redux'
import userReducer from './userReducer'
import projectReducer from './projectReducer'

const rootReducer = combineReducers({
  user:userReducer,
  project:projectReducer
})

export default createStore(rootReducer)