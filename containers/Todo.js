import BoxInput from 'Component/BoxInput'
import List from 'Component/List'

const Todo = ({ todos, addTodo }) => {

  const handleClick = (e) => {
    if (e.keyCode === 13) {
      const data = { task: e.target.value }
      addTodo(data)
      e.target.value = ''
    }
  }

  const deleteData = (e, id) => {
    console.log(id)
  }

  return (
    <div>
      <BoxInput handleClick={ handleClick } />
      <List data={todos} onClick={ deleteData } />
    </div>
  )
}

export default Todo