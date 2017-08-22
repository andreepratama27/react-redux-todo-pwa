import { Component } from 'react'
import Todo from 'Container/Todo'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Todo {...this.props} />
      </div>
    )
  }
}

export default App