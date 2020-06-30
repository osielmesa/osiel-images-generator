import {put, takeEvery, call} from 'redux-saga/effects'
import { homeConstants } from './HomeActionTypes'
import {imagesLoaded, loadingMoreImages, showError} from './HomeActions'
import { fecthMoreImages } from '../../../common/api/ImagesAPI'

function* loadMoreImages(action){
  try{
    yield put(loadingMoreImages(true))
    const res = yield call(fecthMoreImages, action.newPage)
    if(res){
      yield put(imagesLoaded(res))
    }
  }catch(error){
    yield put(showError(true,'An error occurred'))
    console.log(error)
  }
}

export const homeWatcherSagas = [
  takeEvery(homeConstants.LOAD_MORE_IMAGES, loadMoreImages),
];