import { MORE_IMAGES_LOADED } from "./HomeActionTypes";

export const imagesLoaded = (images) =>({
  type:MORE_IMAGES_LOADED,
  payload:images
})