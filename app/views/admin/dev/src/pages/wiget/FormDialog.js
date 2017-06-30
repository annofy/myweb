/**
 *  creator: zheng
 *  date: 2017/6/28
 *  email: zhenglfsir@gmail.com
 *  desc: form's dialog
 */
import React from 'react'
import {Modal, Form, Input} from 'antd'
const FormItem = Form.Item
const formItemLayout = {
  labelCol: {span: 6},
  wrapperCol: {span: 12},
};

class FormDialog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false
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
      case 'textarea':
        return <Input type="textarea" {...field.attr}/>
        break;
      default:
        return <Input {...field.attr}/>
        break;
    }
  }


  handleOk() {
    this.props.form.validateFields((errs, form) => {
      if (!errs) {
        this.setState({
          loading: true
        })
        axios.post(this.props.submitUrl, form)
          .then(res => {
            if (res.ok) {
              this.handleCancel()
              this.props.onSubmited && this.props.onSubmited()
            }
          })
      }
    })
  }

  handleCancel() {
    this.props.onClose && this.props.onClose();
  }

  componentDidMount() {
    this.props.fieldsValue && this.props.form.setFields(this.props.fieldsValue)
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <Modal key={this.props.key} ref={modal => this.modal = modal} title={this.props.title} visible={this.props.show}
             onOk={this.handleOk.bind(this)}
             onCancel={this.handleCancel.bind(this)} confirmLoading={this.state.loading}>
        <Form layout="horizontal">
          {
            this.props.fields && this.props.fields.map((field, index) => <FormItem {...formItemLayout} key={index}
                                                                                   label={field.label}>
              {
                getFieldDecorator(field.name, {
                  rules: field.rules,
                  initialValue: field.value
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
      attr: PropTypes.object,
    }),
  ),
  submitUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  onSubmited: PropTypes.func,
  key: PropTypes.string
}

FormDialog.defaultProps = {
  title: '缺少标题',
  show: false,
  fields: [],
  submitUrl: ''
}

export default Form.create()(FormDialog)