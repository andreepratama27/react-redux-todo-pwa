import BoxInput from 'Component/BoxInput'
import List from 'Component/List'

const Todo = (props) => {

  const { todos, addTodo, setDone, delTask } = props

  const handleClick = (e) => {
    if (e.keyCode === 13) {
      const data = { task: e.target.value }
      addTodo(data)
      e.target.value = ''
    }
  }

  const taskDone = id => {
    setDone({ id })
  }

  const deleteData = id => {
    delTask({ id })
  }

  return (
    <div>

      <BoxInput handleClick={ handleClick } />

      <div className='divider'></div>

      <List
        data={todos}
        deleteData={ deleteData }
        taskDone={ taskDone } />
    </div>
  )
}

export default Todo