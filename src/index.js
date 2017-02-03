import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import aModule from './aModule'

//----------------------------------------------

const rootReducer = combineReducers({
  [aModule.name]: aModule.reducer,
})

let root 	= document.getElementById('root')
let store 	= createStore(rootReducer)

//----------------------------------------------

ReactDOM.render(
	<Provider store={store}>
		<aModule.components.Main />
	</Provider>
,root)
