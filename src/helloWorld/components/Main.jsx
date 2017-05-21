import React, { Component, PropTypes } from 'react'
import styles from './Main.scss'

export default class Main extends Component {
  render () {

  	const {
  		sayHello,
  		isSayingHello,
  	} = this.props

  	const message = "Hello World!"
  	const buttonText = "Say hello..."

  	let inner
  	if (isSayingHello) {
  		inner = ( 
  			<h1>{message}</h1>
  		)
  	} else {
  		inner = ( 
  			<button onClick={sayHello}>{buttonText}</button>
  		)
  	}

    return (
      <main className={styles.helloWorld}>
      	{ inner }
      </main>
    )
  }
}

Main.propTypes = {
	isSayingHello: PropTypes.bool.isRequired,
	sayHello: PropTypes.func.isRequired,
}
