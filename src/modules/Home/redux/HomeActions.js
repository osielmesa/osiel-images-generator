import {homeConstants} from "./HomeActionTypes";

export const imagesLoaded = (images) =>({
  type:homeConstants.MORE_IMAGES_LOADED,
  payload:images
})

export const loadMoreImages = (newPage = 1) =>(
  {type:homeConstants.LOAD_MORE_IMAGES, newPage}
)

export const loadingMoreImages = (loading) =>(
  {type:homeConstants.LOADING_MORE_IMAGES, payload:loading}
)

export const showError = (show = false, message='') =>(
  {type:homeConstants.SHOW_LOADING_IMAGES_ERROR, payload:{show,message}}
)