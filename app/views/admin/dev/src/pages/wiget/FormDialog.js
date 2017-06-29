/**
 *  creator: zheng
 *  date: 2017/6/28
 *  email: zhenglfsir@gmail.com
 *  desc: form's dialog
 */
import React from 'react'
import {Modal, Form, Input} from 'antd'
const FormItem = Form.Item

class FormDialog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  //todo 处理各种表单控件
  typeField(field) {
    const type = field.type
    switch (type) {
      case 'checkbox':
        break;
      case 'select':
        break;
      default:
        return <Input placeholder={field.attr.placeholder}/>
        break;
    }
  }


  handleOk() {
    this.setState({
      loading: true
    })
    this.props.form.validateFields((errs, form) => {
      if (!errs) {
        axios.post(this.props.submitUrl, form)
          .then(res => {
            if (res.ok) {
              this.handleCancel()
            }
          })
      }
    })
  }

  handleCancel() {
    this.props.onClose();
    this.props.form.resetFields()
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <Modal ref={modal => this.modal = modal} title={this.props.title} visible={this.props.show}
             onOk={this.handleOk.bind(this)}
             onCancel={this.handleCancel.bind(this)} confirmLoading={this.state.loading}>
        <Form>
          {
            this.props.fileds && this.props.fileds.map((field, index) => <FormItem key={index} label={field.label}>
              {
                getFieldDecorator(field.name, {
                  rules: field.rules
                })(this.typeField(field))
              }
            </FormItem>)
          }
        </Form>
      </Modal>
    )
  }
}

FormDialog.propsType = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rules: PropTypes.arrayOf(
        PropTypes.shape({
          required: PropTypes.bool,
          message: PropTypes.string
        })
      ),
      type: PropTypes.string,
      attr: PropTypes.object
    }),
  ),
  submitUrl: PropTypes.string.isRequired
}

FormDialog.defaultProps = {
  title: '缺少标题',
  show: false,
  fields: [],
  submitUrl: ''
}

export default Form.create()(FormDialog)