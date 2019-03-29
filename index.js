import App from './src/App';
import todoApp from 'Reducer/';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {render} from 'react-dom';
import 'gestalt/dist/gestalt.css';

const store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container'),
);
