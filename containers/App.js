import { connect } from 'react-redux'
import App from 'Component/App'
import { addTodo, delTask, setDone } from 'Actions/'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  addTodo(data) {
    dispatch(addTodo(data))
  },

  delTask(data) {
    dispatch(delTask(data))
  },

  setDone(data) {
    dispatch(setDone(data))
  }
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer