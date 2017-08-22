import { connect } from 'react-redux'
import App from 'Component/App'
import { addTodo } from 'Actions/'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  addTodo(data) {
    dispatch(addTodo(data))
  }
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer