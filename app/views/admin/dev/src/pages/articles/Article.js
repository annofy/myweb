import React from 'react'
import {Form, Input} from 'antd'
import FuncTable from '@pages/wiget/FuncTable'
import MainContent from '@pages/wiget/MainContent'
import BreadHeader from '@pages/wiget/BreadHeader'
import TextBtn from '@pages/wiget/TextBtn'
import SearchBarForm from '@pages/wiget/SearchBarForm'


export default class Articles extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      columns: [{
        title: '标题',
        dataIndex: 'title',
        render: (text, data) => {
          return <TextBtn type="text" text={text} onClick={this.handleView.bind(this, data)}/>
        }
      }, {
        title: '类别',
        dataIndex: 'categoryId',
        render(text, data) {
          return <span>
            {
              text.map((cat, index) => {
                if (index + 1 === text.length) {
                  return <span key={index}>{cat.name}</span>
                }
                else {
                  return <span key={index}>{cat.name} | </span>
                }
              })
            }
          </span>
        }
      }, {
        title: '发布时间',
        dataIndex: 'meta.createTime',
        render(text, data) {
          return <span>{moment(text).format(process.env.formatText)}</span>
        }
      }, {
        title: '更新时间',
        dataIndex: 'meta.updateTime',
        render(text, data) {
          return <span>{moment(text).format(process.env.formatText)}</span>
        }
      }, {
        title: '操作',
        render: (row, data) => {
          return <span>
            <TextBtn to="/" type="text" text="编辑"/>
            <TextBtn to="/" type="text" text="删除"/>
          </span>
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
    axios.get('/admin/articles')
      .then(res => {
        this.setState({
          tableOptions: {
            loading: false,
          },
          data: res.data
        })
      })
  }

  handleView(data) {
    this.props.history.push('/home/admin/article/detail', data)
  }

  onAdd() {
    const {history} = this.props
    history.push('/home/article/edit')
  }

  render() {
    return (
      <div>
        <BreadHeader items={[{icon: 'book'}, {title: '列表'}]}/>
        <MainContent>
          <FuncTable data={this.state.data} tableOptions={this.state.tableOptions} columns={this.state.columns}>
            <SearchBarForm fields={this.state.fields}>
              <TextBtn text="添加" onClick={this.onAdd.bind(this)}/>
              <TextBtn text="分类"/>
              <TextBtn text="删除"/>
            </SearchBarForm>
          </FuncTable>
        </MainContent>
      </div>
    )
  }
}