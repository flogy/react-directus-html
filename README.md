# react-directus-html

> React component to style and render HTML code received from Directus.

[![NPM](https://img.shields.io/npm/v/react-directus-html.svg)](https://www.npmjs.com/package/react-directus-html) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-directus-html
```

## Usage

```jsx
import React, { Component } from 'react'
import { StyleSheet } from 'aphrodite'

import DirectusHtml from 'react-directus-html'

class Example extends Component {
  render () {
    return (
      <DirectusHtml containerStyle={styles.container}
                    elementStyles={elementStyles}
                    directusUrl="http://localhost:8080">
          {"<h2>HTML that is not really from Directus</h2>"}
      </DirectusHtml>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
});

const elementStyles = StyleSheet.create({
    h2: {
        color: 'yellow',
    },
});
```

## License

MIT © [Florian Gyger](https://github.com/flogy)
