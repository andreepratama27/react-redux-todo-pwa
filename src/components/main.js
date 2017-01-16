import store from 'storeComponent/store'
import Todo from 'generalComponent/todo'
import 'styleComponent/style.scss'

const Main = () =>
    <div className='container'>
        <Todo />
    </div>

ReactDOM.render(<Main />, document.getElementById('app'))

store.subscribe(() =>
    ReactDOM.render(<Main />, document.getElementById('app'))
)

