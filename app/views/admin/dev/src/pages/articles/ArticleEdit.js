import React from 'react'
import {Link} from 'react-router-dom'
import {Icon, Breadcrumb, Form, Input, Button, Select} from 'antd'
import MainContent from '@pages/wiget/MainContent'
import Editor from '@pages/wiget/Editor'

const FormItem = Form.Item,
  Option = Select.Option;
const formItemLayout = {
  labelCol: {span: 2},
  wrapperCol: {span: 8},
};
const formTailLayout = {
  labelCol: {span: 2},
  wrapperCol: {span: 8, offset: 2},
};

class ArticleEdit extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      form: {
        content: {},
        html: '',
        txt: '',
        title: '',
        desc: '',
        categoryId: ''
      },
      categories: []
    }
  }

  editorContents(delta, html, txt) {
    this.setState({
      form: {...this.state.form, content: delta, txt, html}
    })
  }

  handleSubmit() {
    const {history} = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let form = {...this.state.form, ...values}
        axios.post('/admin/articles', {...form})
          .then(res => {
            history.goBack()
          })
      }
    })
  }

  fetchData() {

  }

  componentWillMount() {
    axios.get('/admin/category')
      .then(res => {
        if (res.ok) {
          this.setState({
            categories: res.data
          })
        }
      })
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Icon type="book"/>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/home/article">列表</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>添加</Breadcrumb.Item>
        </Breadcrumb>
        <MainContent>
          <Form>
            <FormItem {...formItemLayout} label="标题">
              {
                getFieldDecorator('title', {
                  rules: [{
                    required: true,
                    message: '请输入标题'
                  }]
                })(
                  <Input placeholder="标题"/>
                )
              }
            </FormItem>
            <FormItem {...formItemLayout} label="类别">
              {
                getFieldDecorator('categoryId', {
                  rules: [{
                    required: true,
                    message: '请选择分类'
                  }]
                })(
                  <Select mode="multiple" placeholder="请选择分类">
                    {
                      this.state.categories.map((cv, index) => <Option key={index} value={cv._id}>{cv.name}</Option>)
                    }
                  </Select>
                )
              }
            </FormItem>
            <FormItem {...formItemLayout} label="简介">
              {
                getFieldDecorator('desc', {
                  rules: [{
                    required: true,
                    message: '随便输入点呗'
                  }]
                })(
                  <Input placeholder="标题" type="textarea" rows={2} style={{resize: 'none'}}/>
                )
              }
            </FormItem>
            <FormItem label="内容" labelCol={{span: 2}} wrapperCol={{span: 18}}>
              <Editor editorContents={this.editorContents.bind(this)}/>
            </FormItem>
            <FormItem {...formTailLayout}>
              <Button type="primary" onClick={this.handleSubmit.bind(this)}>添加</Button>
            </FormItem>
          </Form>
        </MainContent>
      </div>
    )
  }
}

export default Form.create()(ArticleEdit)