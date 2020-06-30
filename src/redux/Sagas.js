import {all} from 'redux-saga/effects'
import { homeWatcherSagas } from '../modules/Home/redux/HomeSagas'


export default function* rootSaga() {
  yield all([
    ...homeWatcherSagas
  ])
}