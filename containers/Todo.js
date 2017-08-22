import BoxInput from 'Component/BoxInput'
import List from 'Component/List'

const Todo = ({ todos, addTodo }) => {
  const handleClick = (e) => {
    if (e.keyCode === 13) {
      addTodo(e.target.value)
      e.target.value = ''
    }
  }

  return (
    <div>
      <BoxInput handleClick={ handleClick } />
      <List data={todos} />
    </div>
  )
}

export default Todo