import {createStore, applyMiddleware, combineReducers} from 'redux'

import CommonReducer from './reducers/CommonReducer'

const rootReducer = combineReducers({
  comon:CommonReducer
})

//TODO apply Saga middleware
const store = createStore(rootReducer)

export default store