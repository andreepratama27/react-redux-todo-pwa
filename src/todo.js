import store from './store/store'
import Todolist from './Todolist'
import Input from './input'

const Todo = () =>
    <div>
        <Input />
        <Todolist data={store.getState()}/>
    </div>

export default Todo
