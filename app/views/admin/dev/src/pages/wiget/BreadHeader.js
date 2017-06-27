/**
 *  creator: zheng
 *  date: 2017/6/26
 *  email: zhenglfsir@gmail.com
 *  desc: breadcurmb's header
 */
import React from 'react'
import {Breadcrumb, Icon} from 'antd'
const {Item} = Breadcrumb

export default class BreadHeader extends React.Component {

  render() {
    return (
      <Breadcrumb separator={this.props.separator}>
        {
          this.props.items.map((item, index) => {
            return <Item key={index}>
              {item.icon && <Icon type={item.icon}/>}{item.title}
            </Item>
          })
        }
      </Breadcrumb>
    )
  }
}

BreadHeader.PropTypes = {
  separator: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string
    })
  ).isRequired
}
BreadHeader.defaultProps = {
  separator: '>',
  items: []
}