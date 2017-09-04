import { Component } from 'react'
import { init as firebaseInit } from 'Config/firebase'
import Todo from 'Container/Todo'
import style from 'Style/style.scss'

class App extends Component {
  constructor(props) {
    super(props)
    firebaseInit()
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