import React from 'react'
import {Breadcrumb, Icon} from 'antd'
import {Link} from 'react-router-dom'

export default class BreadItem extends React.Component {

  render() {
    return (
      <Breadcrumb.Item>
        <Link to={this.props.to}>
          <Icon type={this.props.icon}/>
        </Link>
      </Breadcrumb.Item>
    )
  }
}