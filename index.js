import App from 'Container/App'
import todoApp from 'Reducer/'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from 'react-dom'

const store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
)