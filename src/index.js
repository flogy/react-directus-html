import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { css } from 'aphrodite'

export default class DirectusHtml extends Component {
  transformHtmlNode (node) {
    if (node.type === 'tag' && this.props.elementStyles[node.name]) {
      node.attribs['class'] = css(this.props.elementStyles[node.name])
    }
    if (node.type === 'tag' && node.name === 'img' && node.attribs['src'].startsWith('/')) {
      node.attribs['src'] = this.props.directusUrl + node.attribs['src']
    }
  }

  render () {
    return (
      <div className={css(this.props.containerStyle)}>
        {this.props.children ? ReactHtmlParser(this.props.children, { transform: this.transformHtmlNode.bind(this) }) : 'Loading...'}
      </div>
    )
  }
}
