import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import axios from 'axios'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './sagas'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3001'

const sagaMiddleWare = createSagaMiddleWare()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  sagaMiddleWare
]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
)

const store = createStore(reducers, enhancer)

sagaMiddleWare.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

