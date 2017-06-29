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
      }
    }
  }

  componentDidMount() {
    this.setState({
      tableOptions: {loading: false}
    })
  }

  render() {
    return (
      <div>
        <BreadHeader items={[{icon: 'github'}, {title: 'node模块'}]}/>
        <MainContent>
          <FuncTable data={this.state.data} columns={this.state.columns}
                     tableOptions={this.state.tableOptions}>
            <SearchBarForm fields={[{label: '名字', fieldName: 'moduleName'}]}>
              <TextBtn text="记录模块"/>
              <TextBtn text="删除"/>
              <TextBtn text="管理分类" onClick={() => {
                this.props.history.push('/home/record/moduleCat')
              }}/>
              <TextBtn text="指定分类"/>
            </SearchBarForm>
          </FuncTable>
        </MainContent>
      </div>
    )
  }
}