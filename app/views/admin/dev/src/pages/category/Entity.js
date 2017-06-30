/**
 *  creator: zheng
 *  date: 2017/6/28
 *  email: zhenglfsir@gmail.com
 *  desc: entities's
 */
import React from 'react'
import {Tooltip, Popconfirm} from 'antd'
import MainContent from '@pages/wiget/MainContent'
import FuncTable from '@pages/wiget/FuncTable'
import BreadHeader from '@pages/wiget/BreadHeader'
import TextBtn from '@pages/wiget/TextBtn'
import FormDialog from '@pages/wiget/FormDialog'
import PopConfirmBtn from '@pages/wiget/PopConfirmBtn'

export default class Entity extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      columns: [
        {
          title: '名称',
          dataIndex: 'name',
          render(text, row) {
            return <Tooltip title={row.desc}>
              <span>{text}</span>
            </Tooltip>
          }
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          render(text) {
            return <span>{moment(text).format(process.env.formatText)}</span>
          }
        },
        {
          title: '更新时间',
          dataIndex: 'updateTime',
          render(text) {
            return <span>{moment(text).format(process.env.formatText)}</span>
          }
        },
        {
          title: '操作',
          render: (text, row) => {
            return <span>
              <PopConfirmBtn type="text" action="删除" params={{id: row._id}} submitUrl="/admin/entity/del"/>
              <TextBtn type="text" text="编辑" onClick={this.handleEdit.bind(this, row)}/>
            </span>
          }
        }
      ],
      tableOptions: {},
      submitUrl: '/admin/entity',
      show: false,
      fields: [
        {
          label: '名称',
          name: 'name',
          type: 'input',
          rules: [{required: true, message: '请填入实体名称'}],
          attr: {
            placeholder: '请填入实体名称'
          }
        },
        {
          label: '描述',
          name: 'desc',
          type: 'textarea',
          rules: [{required: false}],
          attr: {
            autosize: {
              minRows: 2,
              maxRows: 4
            }
          }
        }
      ],
      fieldsValue: {}
    }
  }

  handleDel(id) {

  }

  handleEdit(row) {
    this.setState({
      show: true,
      fieldsValue: {
        name: {
          value: row.name
        },
        desc: {
          value: row.desc
        }
      }
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    axios.get('/admin/entity').then(res => {
      if (res.ok) {
        this.setState({
          data: res.data
        })
      }
    })
  }

  handleSubmited() {
    this.fetchData()
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
        <FormDialog key={Math.random()} submitUrl={this.state.submitUrl} title="增加实体" show={this.state.show}
                    fields={this.state.fields}
                    fieldsValue={this.state.fieldsValue}
                    onClose={this.handleClose.bind(this)} onSubmited={this.handleSubmited.bind(this)}/>
      </div>
    )
  }
}