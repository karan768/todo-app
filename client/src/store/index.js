import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import promise from 'redux-promise-middleware'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import todo, { todosEpic } from './todo/duck'
// Bundling Epics
const rootEpic = combineEpics(
todosEpic
)

// Creating Bundled Epic
const epicMiddleware = createEpicMiddleware()


// Define Middleware
const middleware = [
  thunk,
  epicMiddleware
]

// Define Reducers
const reducers = combineReducers({
 todo,
 form: formReducer
})

// Create Store
export default createStore(reducers,
  applyMiddleware(...middleware))
epicMiddleware.run(rootEpic)

