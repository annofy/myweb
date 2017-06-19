import React from 'react'
import ReactQuill from 'react-quill'
import PropTypes from 'prop-types'

export default class Editor extends React.Component {

  handleChange(html) {
    this.props.editorContents(this.editor.getContents(), html, this.editor.getText())
  }

  componentDidMount() {
    const toolbar = this.editor.getModule('toolbar')
    toolbar.addHandler('image', this.uploadFile)
  }

  uploadFile() {
    console.log('上传了图片')
  }

  render() {
    return (
      <ReactQuill
        theme={'snow'}
        onChange={this.handleChange.bind(this)}
        ref={el => this.editor = el ? el.editor : el}
        modules={Editor.modules}
        formats={Editor.formats}
        placeholder={this.props.placeholder}>
        <div className="zlf-quill-editor"></div>
      </ReactQuill>
    )
  }
}

Editor.modules = {
  toolbar: [
    [{'header': [1, 2, 3, 4, 5, 6, false]}, {'font': []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
      {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'code-block', 'clean']
  ]
}

Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'code-block'
]

Editor.propTypes = {
  placeholder: PropTypes.string,
}

Editor.defaultProps = {
  placeholder: '滴水穿石，非一日之功...'
}