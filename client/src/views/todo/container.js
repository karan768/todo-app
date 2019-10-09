import { connect } from 'react-redux'
import Todo from './component.js'
import {addTodos, getTodos,deleteTodos,updateTodos } from '../../store/todo/duck'

const TodoContainer = connect(
  state => ({
  }),{
    getTodos,
    addTodos,
    deleteTodos,
    updateTodos
     }
)(Todo)

export default TodoContainer
