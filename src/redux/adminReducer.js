import axios from 'axios'

const initialState = {
  loading: false,
  users: []
}

const REQUEST_USERS = 'REQUEST_USERS';


export const requestUsers = () => {
  let users = axios.get('/auth/adminUserGet').then(res => res.data);
  console.log('Request Made for Users, waiting Response',users)
  return {
    type: REQUEST_USERS,
    payload: users
  }
}
//getting here and sending the axios request
export const requestProjects = () => {
  console.log('Made it to RequestProjects Admin Reducer')
  let users = axios.get('/auth/adminProjectGet').then(res => res.data);
  console.log('Request Made for Projects, waiting Response',users)
  return {
    type: REQUEST_USERS,
    payload: users
  }
}


export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_USERS + '_PENDING':
      return { ...state,loading:true}
    case REQUEST_USERS + '_FULFILLED':
      return { loading: false, users: action.payload}
    default:
      return state;
  }
}