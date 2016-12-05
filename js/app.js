import React, { Component, View } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducer'

import MainContainer from './component/MainContainer'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../css/styles.css'

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

class Root extends Component {
	
	render() {
		return (
			<Provider store={store}>
				<MainContainer />
			</Provider>
		)
	}
	
}

render(<Root />, document.getElementById( 'content' ));

