import React from 'react';
import ReactDOM from 'react-dom'
import { CreateStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/App'
import reducers from './main/rootReducer'

const store = CreateStore(reducers)

ReactDOM.render(
        <App />

    , document.getElementById('app')
)