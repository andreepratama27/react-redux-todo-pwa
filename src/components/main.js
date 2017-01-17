import store from 'storeComponent/store'
import Todo from 'generalComponent/todo'
import 'styleComponent/style.scss'

class Main extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div className='container'>
                <Todo />
            </div>
        )
    }

}

ReactDOM.render(<Main />, document.getElementById('app'))

store.subscribe(() =>
    ReactDOM.render(<Main />, document.getElementById('app'))
)

