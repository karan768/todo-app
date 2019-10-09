import { connect } from 'react-redux'
import { getTodos } from '../../store/todo/duck'
import AppComponent from './component'
const AppContainer = connect(
  state => ({
  }),{
getTodos
  }
)(AppComponent)
export default AppContainer
