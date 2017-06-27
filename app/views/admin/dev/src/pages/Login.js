import React from 'react'
import {Form, Input, Button, Layout, Icon, Checkbox, message} from 'antd'
import TxtBtn from '@pages/wiget/TextBtn'
import TextBtn from "./wiget/TextBtn";

const FormItem = Form.Item
const {Header, Content, Footer} = Layout
class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  componentWillMount() {
    console.log('#', '已经跳转')
    axios.get('/user/login')
      .then(res => {
        if (res.ok) {
          this.props.history.push('/home')
        }
      })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.form.validateFields((err, form) => {
      if (!err) {
        this.setState({
          loading: true
        })
        localStorage.setItem('name', form.name)
        axios.post('/user/login', form)
          .then(res => {
            if (res.ok) {
              this.props.history.push('/home')
            } else {
              this.props.form.setFields({
                name: {
                  errors: [new Error('')]
                },
                password: {
                  errors: [new Error('')]
                }
              })
              message.error('账号或者密码错误')
              this.setState({
                loading: false
              })
            }
          }).catch(err => {
          message.error('账号或者密码错误')
          this.props.form.setFields([{
            name: {
              errors: new Error('账号有问题')
            },
            password: {
              errors: new Error('密码有问题')
            }
          }])
          this.setState({
            loading: false
          })
        })
      }
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div style={{height: '100%', width: '100%'}} className="login-box">
        <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
          <FormItem>
            <p style={{
              textAlign: 'center',
              fontWeight: 'blod',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontSize: 20
            }}>OUR OUR
              OUR <span style={{fontSize: 12, fontWeight: 'normal'}}>by &copy;longfan</span></p>
          </FormItem>
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{required: true, message: 'Please input your name!'}],
              initialValue: localStorage.getItem('name')
            })(
              <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
              <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" loading={this.state.loading} htmlType="submit" style={{width: '100%'}}>
              Login
            </Button>
          </FormItem>
          <TextBtn text="Forgot password" type="text" onClick={() => {
            message.destroy()
            message.warning('请联系管理员，邮箱地址:zhenglfsir@gmail.com')
          }}/>
          <TextBtn text="Register now!" type="text" style={{float: 'right'}} onClick={() => {
            message.destroy()
            message.warning('注册暂时未开放, 请等待...')
          }}/>
        </Form>
      </div>

    )
  }
}
export default Form.create()(Login)
