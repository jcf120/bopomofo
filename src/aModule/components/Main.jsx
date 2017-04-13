import React, { Component } from 'react'
import styles from './Main.scss'

export default class Main extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main><h1 className={styles.maintext} >MAIN</h1></main>
    )
  }
}
