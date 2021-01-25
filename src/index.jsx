import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promisse from 'redux-promise'

import App from './main/App'
import rootReducer from './main/rootReducer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools)
//const store = applyMiddleware(promisse)(createStore)(rootReducer, devTools)
ReactDOM.render(
    
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('app')
)