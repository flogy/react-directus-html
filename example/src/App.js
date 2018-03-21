import React, { Component } from 'react'
import { StyleSheet } from 'aphrodite'

import DirectusHtml from 'react-directus-html'

export default class App extends Component {
  render () {
    return (
      <DirectusHtml containerStyle={styles.container}
        elementStyles={elementStyles}
        directusUrl='http://localhost:8080'>
        {'<h2>HTML that is not really from Directus</h2>'}
      </DirectusHtml>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  }
})

const elementStyles = StyleSheet.create({
  h2: {
    color: 'yellow'
  }
})
