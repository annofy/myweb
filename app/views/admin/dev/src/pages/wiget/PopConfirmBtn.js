/**
 *  creator: zheng
 *  date: 2017/6/29
 *  email: zhenglfsir@gmail.com
 *  desc: Popconfirm button
 */
import React from 'react'
import {Popconfirm} from 'antd'
import TextBtn from './TextBtn'

export default class PopConfirmBtn extends React.Component {

  constructor(props) {
    super(props)
  }

  handleConfirm() {
    axios.get(this.props.submitUrl, {params: this.props.params})
      .then(res => {
        if (res.ok) {
          this.props.onSubmited && this.props.onSubmited()
        }
      })
  }

  handleCancel() {

  }

  render() {
    return (
      <Popconfirm title={'确认' + this.props.action + '吗?'} okText={this.props.action} cancelText="取消"
                  onConfirm={this.handleConfirm.bind(this)}
                  onCancel={this.handleCancel.bind(this)}>
        <TextBtn text={this.props.action} type="text"/>
      </Popconfirm>
    )
  }
}

PopConfirmBtn.propTypes = {
  submitUrl: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  onSubmited: PropTypes.func,
  params: PropTypes.object
}

PopConfirmBtn.defaultProps = {
  submitUrl: '',
  action: '操作',
  text: '按钮',
}