import App from 'Container/App'
import store from 'Config/configureStore'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
)