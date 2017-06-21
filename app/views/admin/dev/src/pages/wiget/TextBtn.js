/* eslint-disable */
import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Button} from 'antd'

const styles = {
  btn: {
    marginRight: 8,
    textDecoration: 'none'
  }
}

export default class TextBtn extends React.Component {

  get Btn() {
    switch (this.props.type) {
      case 'text':
        return ~~this.props.to.length ?
          <Link style={Object.assign({}, styles.btn, this.props.style)} to={this.props.to}>{this.props.text}</Link> :
          <a style={Object.assign({}, styles.btn, this.props.style)} href="javascript:;"
             onClick={this.props.onClick}>{this.props.text}</a>
      default:
        return <Button style={Object.assign({}, styles.btn, this.props.style)} type={this.props.type}
                       size={this.props.size}
                       onClick={this.props.onClick}>{this.props.text}</Button>
    }
  }

  render() {
    return this.Btn
  }
}

TextBtn.propsType = {
  to: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string
}

TextBtn.defaultProps = {
  to: '',
  text: '',
  onClick: null,
  size: 'default'
}