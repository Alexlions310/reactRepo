import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import { Provider } from 'react-redux'
import App from './components/App'
import { store } from '@app/redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)