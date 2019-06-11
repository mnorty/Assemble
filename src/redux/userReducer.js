const initialState = {
  username: '',
  id: ''
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'

export function updateUser(user){
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export function clearUser(){
  return{
    type:CLEAR_USER
  }
}

function reducer(state = initialState, action){
  switch(action.type){
    case UPDATE_USER:
      const {username,id} = action.payload
      return {...state,username,id}
    case CLEAR_USER:
      return { ...initialState}
    default:
      return state
  }
}

export default reducer