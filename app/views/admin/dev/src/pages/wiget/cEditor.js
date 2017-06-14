import React from 'react'
const Quill = require('quill/dist/quill.min')


export default class Editor extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  compoentDidMount() {
    this.editor = new Quill('editor', {
      theme: 'snow'
    })
  }

  render() {
    return (
      <div id="editor"></div>
    )
  }
}