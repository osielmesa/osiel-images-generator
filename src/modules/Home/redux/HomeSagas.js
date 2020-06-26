import {takeEvery, put} from 'redux-saga/effects'
import { LOAD_MORE_IMAGES } from './HomeActionTypes'
import { imagesLoaded } from './HomeActions'

function* loadMoreImages(){
  yield put(imagesLoaded(['osiel','salsa']))
}

function* homeSaga(){
  field takeEvery(LOAD_MORE_IMAGES,loadMoreImages)
}

export default homeSaga