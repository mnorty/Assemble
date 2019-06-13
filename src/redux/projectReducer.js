import axios from 'axios'

const initialState = {
  loading: false,
  project: []
}

const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
const REFRESH_PROJECTS = 'REFRESH_PROJECTS'

export const requestProjects = () => {
  let project = axios.get('/auth/project').then(res => res.data);
  console.log('Request Made for Projects, waiting Response',project)
  return {
    type: REQUEST_PROJECTS,
    payload: project
  }
}

export const refreshProjects = (project) => { // the input here, is the res.data from card.js, we chose to name it project here, but it is the same information. 
  return {
    type: REFRESH_PROJECTS,  //here we name the case connection below
    payload:project //here we decide what the payload will be in the case, we chose the data we named project(res.data)
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_PROJECTS + '_PENDING':
      return { ...state,loading:true}
    case REQUEST_PROJECTS + '_FULFILLED':
      return { loading: false, project: action.payload}
    case REFRESH_PROJECTS:
      return { ...state,project: action.payload }//the ... state is a direct copy of our initial state. we then state that project = action.payload, which is project from refreshProjects(res.data), becuase two variables can't have the same name this updates the value to project.
    default:
      return state;
  }
}