
import "babel-polyfill"

import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'



import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
// if(process.env.NODE_ENV === 'development') {
// 	middleware.push(logger)
// }

const store = createStore(reducers, 
	applyMiddleware(sagaMiddleware))

createSagaMiddleware.run(rootSaga)

export default store    
