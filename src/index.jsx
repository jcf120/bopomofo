import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import helloWorld from './helloWorld'

//----------------------------------------------

const rootReducer = combineReducers({
  [helloWorld.name]: helloWorld.reducer,
})

let root 	= document.getElementById('root')
let store 	= createStore(rootReducer)

//----------------------------------------------

ReactDOM.render(
	<Provider store={store}>
		<helloWorld.components.Main />
	</Provider>
,root)
