import React from 'react'
import {Breadcrumb, Icon, message, Popconfirm} from 'antd'
import MainContent from '@pages/wiget/MainContent'
import FuncTable from '@pages/wiget/FuncTable'
import TextBtn from '@pages/wiget/TextBtn'

export default class Category extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      columns: [{
        title: '名称',
        key: 'name',
        dataIndex: 'name'
      }, {
        title: '创建时间',
        key: 'createTime',
        dataIndex: 'meta.createTime',
        render: (text, data) => {
          return <span>{moment(text).format(process.env.formatText)}</span>
        }
      }, {
        title: '更新时间',
        key: 'updateTime',
        dataIndex: 'meta.updateTime',
        render: (text, data) => {
          return <span>{moment(text).format(process.env.formatText)}</span>
        }
      }, {
        title: '操作',
        render: (row, data, index) => {
          return <span>
              <TextBtn type="text" onClick={this.toEdit.bind(this, data)} text="编辑"/>
              <TextBtn type="text" onClick={this.toDelete.bind(this, data, index)} text="删除"/>
            </span>
        }
      }],
      tableOptions: {},
      rowKeys: [],
      pagination: {
        start: 0,
        pageSize: 10
      }
    }
  }

  toEdit(data) {
    const {history} = this.props
    history.push('/home/category/edit', {action: 'edit', data})
  }

  toDelete(data, index) {
    // 单条删除
    const dataSource = this.state.data,
      delItem = dataSource.splice(index, 1)
    this.setState({
      data: dataSource
    })
    this._id = data._id
    this.hide = message.warn(<span>删除分类 {data.name}. <TextBtn text="点击撤销" type="text" onClick={() => {
      this.hide()
      dataSource.splice(index, 0, ...delItem)
      this.setState({
        data: dataSource
      })
    }}/></span>, 10, () => {
      this.deleteAction(data._id)
      message.destroy()
    })
  }

  deleteAction(params) {
    if (Object.prototype.toString.apply(params) === '[object String]') {
      params = [params]
    }
    axios.post('/admin/category/delete', {ids: params})
      .then(res => {
        if (res.ok && this.hide) {
          this.fetchList()
        }
      })
  }

  componentDidMount() {
    this.fetchList()
  }

  componentWillUnmount() {
    if (this.hide) {
      this.hide()
      this.hide = null
      this.deleteAction(this._id)
    }
  }

  fetchList() {
    axios.get('/admin/category', {params: {...this.state.pagination}}).then(res => {
      if (res.ok) {
        this.setState({
          tableOptions: {
            loading: false,
          },
          data: res.data,
        })
      }
    })
  }


  addCategory() {
    const {history} = this.props
    history.push('/home/category/edit')
  }

  batchDelete() {
    if (this.state.rowKeys.length === 0) {
      message.warn('请至少选择一条记录')
    } else {
      this.deleteAction(this.state.rowKeys)
    }
  }

  onChange(pagination) {
    this.setState({
      pagination: pagination
    })
  }


  render() {
    return (
      <div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Icon type="tags-o"/>
          </Breadcrumb.Item>
          <Breadcrumb.Item>分类</Breadcrumb.Item>
        </Breadcrumb>
        <MainContent>
          <FuncTable data={this.state.data} columns={this.state.columns} rowSelection={{
            onChange: (rowKeys, rows) => {
              this.setState({rowKeys})
            }
          }} tableOptions={this.state.tableOptions}>
            <TextBtn text="添加" onClick={this.addCategory.bind(this)}/>
            <Popconfirm title="确认删除所有选中分类嘛?" onChange={this.onChange.bind(this)} onConfirm={this.batchDelete.bind(this)}
                        okText="确认" cancelText="取消">
              <TextBtn text="删除"/>
            </Popconfirm>
          </FuncTable>
        </MainContent>
      </div>
    )
  }
}