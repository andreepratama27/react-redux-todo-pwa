import { Component } from 'react'
import Todo from 'Container/Todo'
import style from 'Style/style.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className='container'>
        <div className='row'>
          <div className='todo-wrapper'>
            <Todo {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}

export default App