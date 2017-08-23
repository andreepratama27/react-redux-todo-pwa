import { connect } from 'react-redux'
import App from 'Component/App'
import { addTodo, delTask } from 'Actions/'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  addTodo(data) {
    dispatch(addTodo(data))
  },

  delTask(data) {
    dispatch(delTask(data))
  }
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer