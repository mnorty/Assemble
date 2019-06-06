import axios from 'axios'

const initialState = {
  loading: false,
  articles: []
}

const REQUEST_PROJECTS = 'REQUEST_PROJECTS';

export const requestProjects = () => {
  console.log('got to projectreducer')
  let project = axios.get('/auth/project').then(res => res.data);
  return {
    type: REQUEST_PROJECTS,
    payload: project
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_PROJECTS + '_PENDING':
      return { ...state,loading:true}
    case REQUEST_PROJECTS + '_FULFILLED':
      return { loading: false, articles: action.payload}
    default:
      return state;
  }
}