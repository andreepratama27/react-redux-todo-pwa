import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todoApp from 'Reducer'

export default createStore(todoApp, applyMiddleware(thunk))
