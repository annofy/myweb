/**
 *  creator: zheng
 *  date: 2017/6/30
 *  email: zhenglfsir@gmail.com
 *  desc: 模块记录
 */
import React from 'react'
import {Form, Breadcrumb} from 'antd'
import MainContent from '@pages/wiget/MainContent'

class NodeModuleEdit extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Icon type="book"/>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/home/article">列表</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>添加</Breadcrumb.Item>
        </Breadcrumb>

      </div>
    )
  }
}

export default Form.create()(NodeModuleEdit)