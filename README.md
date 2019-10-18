# react-directus-html

> React component to style and render HTML code received from Directus.

[![NPM](https://img.shields.io/npm/v/react-directus-html.svg)](https://www.npmjs.com/package/react-directus-html) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The goal of this component is to be able to style and render the returned HTML code from the [Directus CMS](https://getdirectus.com/) with ease.


## Install

## Test für mich

```bash
npm install --save react-directus-html
```

## Usage

### Example

```jsx
import React, { Component } from 'react'
import { StyleSheet } from 'aphrodite'

import DirectusHtml from 'react-directus-html'

class Example extends Component {
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
```

### Styling

Using the prop ``containerStyle`` you can pass an aphrodite style used to define the styling of the ``div`` containing the rendered HTML elements.

Using the prop ``elementStyles`` you can pass an aphrodite style sheet containing all the styles for each HTML element. The key must be equal to the HTML element tag name, e.g. ``h2`` or ``div``. The contained styles will then be applied to the realted HTML elements.


### Directus URL

The prop ``directusUrl`` is required to replace the relative URLs returned by Directus (e.g. for the image sources) with absolute ones. It must be formatted like this example URL: http://localhost:8080


## License

MIT © [Florian Gyger](https://github.com/flogy)
