import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'


import rootSaga from './Sagas'
import HomeReducer from '../modules/Home/redux/HomeReducer'

const rootReducer = combineReducers({
  home: HomeReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)

sagaMiddleware.run(rootSaga)

export default store