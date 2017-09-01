import { connect } from 'react-redux'
import { filterTodo, setDone } from 'Actions/'
import Todo from 'Component/Todo'

const filtering = (todos, filter) => {
  if (filter != '') {
    let data

    filter === 'all'
      ? data = todos.filter(v => v.done === false)
      : data = todos.filter(v => v.done === true)

    return data
  } else {
    return todos
  }
}

const mapStateToProps = state => ({
  todos: filtering(state.todos, state.visibilityFilters)
})

const mapDispatchToProps = dispatch => ({
  filterTodo(data) {
    dispatch(filterTodo(data))
  },

  setDone(data) {
    dispatch(setDone(data))
  }
})

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default TodoContainer