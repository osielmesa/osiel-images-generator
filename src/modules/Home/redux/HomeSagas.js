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
    yield put(loadingMoreImages(false))
    yield put(showError(true,'An error occurred. Please check internet availability and try again!'))
  }
}

export const homeWatcherSagas = [
  takeEvery(homeConstants.LOAD_MORE_IMAGES, loadMoreImages),
];