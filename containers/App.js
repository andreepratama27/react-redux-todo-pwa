import { connect } from 'react-redux'
import App from 'Component/App'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  addTodo(data) {
    console.log(data)
  }
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer