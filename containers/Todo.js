import Filtering from 'Component/Filtering'
import BoxInput from 'Component/BoxInput'
import List from 'Component/List'

const Todo = ({ todos, addTodo, delTask, setDone }) => {

  const handleClick = (e) => {
    if (e.keyCode === 13) {
      const data = { task: e.target.value }
      addTodo(data)
      e.target.value = ''
    }
  }

  const deleteData = (id) => {
    delTask({ id })
  }

  return (
    <div>

      <BoxInput handleClick={ handleClick } />

      <div className='divider'></div>

      <Filtering />

      <List data={todos} onClick={ deleteData } />

    </div>
  )
}

export default Todo