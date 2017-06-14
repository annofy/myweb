import React from 'react'
import {Breadcrumb, Icon, Form, Input} from 'antd'
import FuncTable from '@pages/wiget/FuncTable'
import MainContent from '@pages/wiget/MainContent'
import TextBtn from '@pages/wiget/TextBtn'
import SearchBarForm from '@pages/wiget/SearchBarForm'


export default class Articles extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [{
        _id: 1,
        title: 'Javascript的进阶记录',
        category: 'Javascript',
        createTime: '2017.05.04 14:32',
        updateTime: '2017.06.04 21:02',
        other: '其他数据'
      }],
      columns: [{
        title: '标题',
        dataIndex: 'title',
        render: (row, data) => {
          return <TextBtn to="/" type="text" text={data.title}/>
        }
      }, {
        title: '类别',
        dataIndex: 'category',
      }, {
        title: '发布时间',
        dataIndex: 'createTime',
      }, {
        title: '更新时间',
        dataIndex: 'updateTime',
      }, {
        title: '操作',
        render: (row, data) => {
          return <TextBtn to="/" type="text" text="编辑"/>
        }
      }],
      tableOptions: {
        loading: true
      },
      fields: [{
        label: '标题',
        fieldName: 'title'
      }]
    }
  }

  componentDidMount() {
    this.setState({
      tableOptions: {
        loading: false
      }
    })
  }

  onAdd() {
    const {history} = this.props
    history.push('/articleEdit')
  }

  render() {
    return (
      <div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Icon type="book"/>
          </Breadcrumb.Item>
          <Breadcrumb.Item>列表</Breadcrumb.Item>
        </Breadcrumb>
        <MainContent>
          <div>
            <TextBtn text="添加" onClick={this.onAdd.bind(this)}/>
            <TextBtn text="分类"/>
            <TextBtn text="删除"/>
          </div>
          <FuncTable data={this.state.data} tableOptions={this.state.tableOptions} columns={this.state.columns}>
            <SearchBarForm fields={this.state.fields}/>
          </FuncTable>
        </MainContent>
      </div>
    )
  }
}