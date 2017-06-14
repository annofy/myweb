import React from 'react'
import {Form, Input, Button, Layout, Icon, Checkbox} from 'antd'

const FormItem = Form.Item
const {Header, Content, Footer} = Layout
class Login extends React.Component {

  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <Layout>
        <Header></Header>
        <Content>
          <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{required: true, message: 'Please input your username!'}],
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
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </Content>
        <Footer>design by longfan.zheng</Footer>
      </Layout>
    )
  }
}
export default Form.create()(Login)
