import { SHOW_LOADING } from "../actions/ActionTypes"

const initialState = {
  showLoading: false
}

const CommonReducer = (state = initialState, action) =>{
  switch(action.type){
    case SHOW_LOADING:
      return {...state, showLoading:action.payload}
    default:
      return state
  }
}

export default CommonReducer