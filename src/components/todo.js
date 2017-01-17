import Todolist from 'generalComponent/todolist'
import store from 'storeComponent/store'
import Input from 'generalComponent/input'

const dataFromStorage = JSON.parse(localStorage.getItem('todo'))

const Todo = () =>
    <div>
        <Input />
        <Todolist data={store.getState()} />
    </div>

export default Todo
