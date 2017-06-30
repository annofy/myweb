import React from 'react'
import {Breadcrumb, Icon, Form, Input, Button, Select} from 'antd'
import {Link} from 'react-router-dom'
import MainContent from '@pages/wiget/MainContent'

const FormItem = Form.Item
const formItemLayout = {
  labelCol: {span: 2},
  wrapperCol: {span: 8},
};
const formTailLayout = {
  labelCol: {span: 2},
  wrapperCol: {span: 8, offset: 2},
};
let timeout;

class CategoryEdit extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      entities: []
    }
  }

  handleSubmit() {
    const {history} = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post('/admin/category', {...values})
          .then(res => {
            if (res.ok) {
              history.goBack()
            }
          })
      }
    })
  }

  handleEdit() {
    const {history} = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post('/admin/category/edit', {...this.category, ...values})
          .then(res => {
            if (res.ok) {
              history.goBack()
            }
          })
      }
    })
  }

  componentDidMount() {
    const {state} = this.props.location
    if (state && state.action === 'edit') {
      this.category = state.data
      this.props.form.setFields({
        name: {
          value: state.data.name
        },
        desc: {
          value: state.data.desc
        },
        entity: {
          value: state.data.entity._id
        }
      })
    }
    axios.get('/admin/entity')
      .then(res => {
        if (res.ok) {
          this.setState({
            entities: res.data
          })
        }
      })
  }

  get optBtn() {
    const {state} = this.props.location;
    return state && state.action === 'edit' ?
      <Button type="primary" onClick={this.handleEdit.bind(this)}>编辑</Button> :
      <Button type="primary" onClick={this.handleSubmit.bind(this)}>添加</Button>;
  }

  render() {
    const {state} = this.props.location;
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Icon type="book"/>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/home/category">列表</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>添加分类</Breadcrumb.Item>
        </Breadcrumb>
        <MainContent>
          <Form>
            <FormItem {...formItemLayout} label="名称">
              {
                getFieldDecorator('name', {
                  rules: [{
                    required: true,
                    whitespace: true,
                    validator: (rule, value, callback) => {
                      if (state && state.action === 'edit') {
                        return callback()
                      }
                      // 简单防抖动
                      if (timeout) {
                        clearTimeout(timeout)
                        timeout = null
                      }
                      timeout = setTimeout(() => {
                        if (value.length !== 0) {
                          axios.get('/admin/category/validate', {
                            params: {
                              name: value
                            }
                          }).then(res => {
                            if (res.ok && res.data) {
                              return callback(new Error('名称已存在,换个名字呗'))
                            } else {
                              return callback()
                            }
                          })
                        } else {
                          return callback(new Error('不能为空'))
                        }
                      }, 300)
                    }
                  }]
                })(
                  <Input placeholder="名称"/>
                )
              }
            </FormItem>
            <FormItem {...formItemLayout} label="实体">
              {
                getFieldDecorator('entity', {
                  rules: [{
                    required: true,
                    message: '请选择实体分类'
                  }]
                })(
                  <Select>
                    {
                      this.state.entities.map((en, index) => <Select.Option key={index}
                                                                            value={en._id}>{en.name}</Select.Option>)
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
                    message: '随便输入点啥',
                    whitespace: ''
                  }]
                })(
                  <Input placeholder="名称" type="textarea" rows={2}/>
                )
              }
            </FormItem>
            <FormItem {...formTailLayout}>
              {this.optBtn}
            </FormItem>
          </Form>
        </MainContent>
      </div>
    )
  }
}

export default Form.create({})(CategoryEdit)