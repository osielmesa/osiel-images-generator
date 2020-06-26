const { MORE_IMAGES_LOADED } = require("./HomeActionTypes")

const initialState = {
  images:[]
}

const HomeReducer = (state = initialState, action) =>{
  switch(action.type){
    case MORE_IMAGES_LOADED:
      return {...state, images:[...state.images, ...action.payload]}
    default:
      return state
  }
}

export default HomeReducer