import { combineEpics } from 'redux-observable'
import { Record } from 'immutable'
// import { mergeMap } from 'rxjs/operators';
// import { ofType, fromPromise } from 'redux-observable';
import {Rx} from 'rxjs/Rx'
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs'
import * as api from './api'
export const SUCCESS = 'success'
export const ERROR = 'error'


export const GETTODOS = 'todoApp/todo/GETTODOS'
export const ADDTODOS = 'todoApp/todo/ADDTODOS'
export const ADDTODOS_SUCCESS = 'todoApp/todo/ADDTODOS_SUCCESS'
export const ADDTODOS_ERROR = 'todoApp/todo/ADDTODOS_ERROR'
export const DELETETODOS_SUCCESS = 'todoApp/todo/DELETETODOS_SUCCESS'
export const DELETETODOS_ERROR = 'todoApp/todo/DELETETODOS_ERROR'
export const DELETETODOS = 'todoApp/todo/DELETETODOS'
export const UPDATETODOS = 'todoApp/todo/UPDATETODOS'


const iState = {
	item:"",
  data: {},
  status: false,
	todoarray:[],
	modalIsOpen: false,
	modal_item:"",
	id:"",
	gettodoPhase:"",
  deletetodoPhase:"",
  updatetodoPhase:"",
  addtodoPhase:"",
	item_data:""
}
class InitialState extends Record(iState) {
  constructor() {
    super()
  }
}
export default function (state= new InitialState ,action={}) {
	 switch (action.type) {
    case GETTODOS: {
      return state
        .set('gettodoPhase', SUCCESS)
    }
   case ADDTODOS: {
      return state
        .set('addtodoPhase', SUCCESS)
    }
     case ADDTODOS_SUCCESS : {
      return state
        .set('addtodoPhase', SUCCESS)
    }
     case ADDTODOS_ERROR: {
      return state
        .set('addtodoPhase', ERROR)
    }
    case DELETETODOS: {
      return state
        .set('deletetodoPhase', SUCCESS)
    }
    case UPDATETODOS: {
      return state
        .set('updatetodoPhase', SUCCESS)
    }
    default: {
      return state
    }
  }
}
export const getTodos = () => {
  return async function() {
    const response = await api.getTodos();
    console.log(response,"8878")
  return {
    type: GETTODOS,
    payload:response
  } 
}
}

export const addTodos = data => {
  // return async function() {
  //   const response = await api.addTodos(data);
  console.log(data,"&&&&&&&&&")
  return {
    type: ADDTODOS,
    payload: data
  }
// }
}

export const deleteTodos = data => {
  return async function() {
    const response = await api.deleteTodos(data);
  return {
    type: DELETETODOS,
    payload: data
  }
}
}

export const updateTodos = data => {
  return async function() {
    const response = await api.updateTodos(data);
  return {
    type: UPDATETODOS,
    payload: response
  }
}
}

const addTodosEpic = action$ =>
  action$
    .ofType(ADDTODOS)
    .mergeMap(action => {
      return Observable.fromPromise(api.addTodos(action.payload))
        .map(payload => ({
          type: ADDTODOS_SUCCESS,
          payload
        }))
        .catch(error => Observable.of({
          type: ADDTODOS_ERROR,
          payload: {
            error
          }
        }))
    })

export const todosEpic = combineEpics(
  addTodosEpic

)