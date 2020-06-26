import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import CommonReducer from './reducers/CommonReducer'
import rootSaga from './Sagas'

const rootReducer = combineReducers({
  comon: CommonReducer
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