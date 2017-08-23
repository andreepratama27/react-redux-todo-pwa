import BoxInput from 'Component/BoxInput'
import List from 'Component/List'

const Todo = ({ todos, addTodo, delTask }) => {

  const handleClick = (e) => {
    if (e.keyCode === 13) {
      const data = { task: e.target.value }
      addTodo(data)
      e.target.value = ''
    }
  }

  const deleteData = (id) => {
    const data = { id }
    delTask(data)
  }

  return (
    <div>

      <BoxInput handleClick={ handleClick } />

      <div className='divider'></div>

      <List data={todos} onClick={ deleteData } />

    </div>
  )
}

export default Todo