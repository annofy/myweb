/**
 *  creator: zheng
 *  date: 2017/6/29
 *  email: zhenglfsir@gmail.com
 *  desc: moment text
 */
import React from 'react'

export default class FormatText extends React.Component {

  get dom() {
    if (this.props.mode !== 'div') {
      return <this.props.mode>{moment(this.props.text).format(process.env.formatText)}</this.props.mode>
    } else {
      return <div>{moment(this.props.text).format(process.env.formatText)}</div>
    }
  }

  render() {
    return this.dom
  }
}