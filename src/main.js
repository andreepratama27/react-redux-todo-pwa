import store from './store/store'
import Todo from './todo'
import './style.scss'

const Main = () =>
    <div className='container'>
        <Todo />
    </div>

ReactDOM.render(<Main />, document.getElementById('app'))

store.subscribe(() =>
    ReactDOM.render(<Main />, document.getElementById('app'))
)

