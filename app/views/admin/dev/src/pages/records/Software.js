/**
 *  creator: zheng
 *  date: 2017/6/19
 *  email: zhenglfsir@gmail.com
 */
import React from 'react'
import FuncTable from '@pages/wiget/FuncTable'
import SearchBarForm from '@pages/wiget/SearchBarForm'
import MainContent from '@pages/wiget/MainContent'
import BreadHeader from '@pages/wiget/BreadHeader'
import TextBtn from "@pages/wiget/TextBtn";
import FormDialog from '@pages/wiget/FormDialog'

export default class Software extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      columns: [
        {
          title: '名称',
          dataIndex: 'softName',
          render(text, row) {
            return <a href={row.npmUrl}>{text}</a>
          }
        },
        {
          title: '描述',
          dataIndex: 'moduleDes'
        },
        {
          isAvailable: '可用',
          dataIndex: 'isAvailable',
          render(text, row) {
            return row.isAvailable ? <Tag color="green">可用</Tag> : <Tag>失效</Tag>
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
      ],
      data: [],
      tableOptions: {
        loading: false
      },
      submitUrl: '',
      show: false,
      fields: [
        {
          label: '名称',
          name: 'name',
          rules: [{required: true, message: '请输入模块名称'}],
          attr: {
            placeholder: '请输入模块名称'
          }
        },
        {
          label: '下载链接',
          name: 'url',
          rules: [],
          attr: {
            placeholder: '请输入官网链接'
          }
        },
        {
          label: '下载密码',
          name: 'code',
          rules: [],
          attr: {
            placeholder: '请输入下载验证码'
          }
        },
        {
          label: '描述',
          name: 'desc',
          type: 'textarea',
          rules: [{required: true, message: '请输入描述'}],
          attr: {
            autosize: {
              minRows: 2,
              maxRows: 4
            },
            placeholder: '请输入简要描述'
          }
        }
      ],
      fieldsValue: []
    }
  }

  handleAdd() {
    this.setState({
      show: true
    })
  }

  handleClose() {
    this.setState({
      show: false
    })
  }

  handleSubmited() {

  }

  render() {
    return (
      <div>
        <BreadHeader items={[{icon: 'apple-o'}, {title: '精品软件'}]}/>
        <MainContent>
          <FuncTable columns={this.state.columns} data={this.state.data}
                     tableOptions={this.state.tableOptions}>
            <SearchBarForm fields={[{label: '软件名称', fieldName: 'softName'}]}>
              <TextBtn text="记录模块" onClick={this.handleAdd.bind(this)}/>
              <TextBtn text="删除"/>
            </SearchBarForm>
          </FuncTable>
        </MainContent>
        <FormDialog key={Math.random()} submitUrl={this.state.submitUrl} title="软件信息"
                    show={this.state.show} fields={this.state.fields} fieldsValue={this.state.fieldsValue}
                    onClose={this.handleClose.bind(this)} onSubmited={this.handleSubmited.bind(this)}/>
      </div>
    )
  }
}