/**
 *  creator: zheng
 *  date: 2017/6/28
 *  email: zhenglfsir@gmail.com
 *  desc: entities's
 */
import React from 'react'
import MainContent from '@pages/wiget/MainContent'
import FuncTable from '@pages/wiget/FuncTable'
import BreadHeader from '@pages/wiget/BreadHeader'
import TextBtn from '@pages/wiget/TextBtn'
import FormDialog from '@pages/wiget/FormDialog'

export default class Entity extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [{
        _id: 1,
        name: '文章',
        createTime: '2017',
        updateTime: '2017'
      }],
      columns: [
        {
          title: '名称',
          dataIndex: 'name'
        },
        {
          title: '创建时间',
          dataIndex: 'createTime'
        },
        {
          title: '更新时间',
          dataIndex: 'updateTime'
        },
        {
          title: '操作',
          render: (text, row) => {
            return <span>
              <TextBtn type="text" text="删除" onClick={this.handleDel.bind(this, row._id)}/>
              <TextBtn type="text" text="编辑" onClick={this.handleEdit.bind(this, row)}/>
            </span>
          }
        }
      ],
      tableOptions: {},
      submitUrl: '',
      show: false,
      fields: []
    }
  }

  handleDel(id) {

  }

  handleEdit(row) {

  }

  componentDidMount() {
    if (this.state.data.length > 0) {
      this.setState({
        tableOptions: {
          loading: false
        }
      })
    }
  }

  handleAdd() {
    this.setState({
      show: true
    })
  }

  handleRemove() {

  }

  handleClose() {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div>
        <BreadHeader items={[{icon: 'tag-o'}, {title: '实体'}]}/>
        <MainContent>
          <FuncTable data={this.state.data} columns={this.state.columns} tableOptions={this.state.tableOptions}>
            <TextBtn text="添加" onClick={this.handleAdd.bind(this)}/>
            <TextBtn text="删除" onClick={this.handleRemove.bind(this)}/>
          </FuncTable>
        </MainContent>
        <FormDialog submitUrl={this.state.submitUrl} title="增加实体" show={this.state.show} fields={this.state.fields}
                    onClose={this.handleClose.bind(this)}/>
      </div>
    )
  }
}