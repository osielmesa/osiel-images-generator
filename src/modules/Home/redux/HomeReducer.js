import {homeConstants} from './HomeActionTypes'

const initialState = {
  images:[],
  currentImagesPage:1,
  loadingMore:false,
  error:null, //{show:boolean, message:string}
}

const HomeReducer = (state = initialState, action) =>{
  switch(action.type){
    case homeConstants.MORE_IMAGES_LOADED:
      return {
        ...state, 
        images:[...state.images, ...action.payload],
        currentImagesPage:state.currentImagesPage+1,
        loadingMore:false
      }
    case homeConstants.LOADING_MORE_IMAGES:
      return {...state, loadingMore:action.payload}
    case homeConstants.SHOW_LOADING_IMAGES_ERROR:
      return {...state, error:{show:action.payload.show, message:action.payload.message}}
    default:
      return state
  }
}

export default HomeReducer