/**
 *  creator: zheng
 *  date: 2017/6/19
 *  email: zhenglfsir@gmail.com
 */
import React from 'react'
import {Tag} from 'antd'
import FuncTable from '@pages/wiget/FuncTable'
import SearchBarForm from '@pages/wiget/SearchBarForm'
import MainContent from '@pages/wiget/MainContent'
import BreadHeader from '@pages/wiget/BreadHeader'
import TextBtn from '@pages/wiget/TextBtn'
import FormDialog from '@pages/wiget/FormDialog'

export default class NodeModule extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      columns: [
        {
          title: '名称',
          dataIndex: 'moduleName',
          render(text, row) {
            return <a href={row.npmUrl}>{text}</a>
          }
        },
        {
          title: '开发者',
          dataIndex: 'developer'
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
      tableOptions: {
        loading: true
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
          label: '官网',
          name: 'url',
          rules: [],
          attr: {
            placeholder: '请输入官网链接'
          }
        },
        {
          label: 'GitHub',
          name: 'github',
          rules: [{required: true, message: '请输入GitHub链接'}],
          attr: {
            placeholder: '请输入GitHub链接'
          }
        },
        {
          label: '开发者',
          name: 'developer',
          rules: [{required: true, message: '请输入开发者'}],
          attr: {
            placeholder: '请输入开发者'
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

  componentDidMount() {
    this.setState({
      tableOptions: {loading: false}
    })
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
        <BreadHeader items={[{icon: 'github'}, {title: 'node模块'}]}/>
        <MainContent>
          <FuncTable data={this.state.data} columns={this.state.columns}
                     tableOptions={this.state.tableOptions}>
            <SearchBarForm fields={[{label: '名字', fieldName: 'moduleName'}]}>
              <TextBtn text="记录模块" onClick={this.handleAdd.bind(this)}/>
              <TextBtn text="删除"/>
            </SearchBarForm>
          </FuncTable>
        </MainContent>
        <FormDialog key={Math.random()} submitUrl={this.state.submitUrl} title="模块信息" show={this.state.show}
                    fields={this.state.fields} fieldsValue={this.state.fieldsValue}
                    onClose={this.handleClose.bind(this)}
                    onSubmited={this.handleSubmited.bind(this)}/>
      </div>
    )
  }
}