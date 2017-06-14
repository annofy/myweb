import React from 'react'
import {Form, Input} from 'antd'
import TextBtn from './TextBtn'

const FormItem = Form.Item

class SearchBarForm extends React.Component {

  constructor(props) {
    super(props)
  }

  handleSearch() {
    this.props.form.validateFields((err, values) => {
      this.props.onSearch(values)
    })
  }

  handleReset() {
    this.props.form.resetFields()
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <Form layout="inline" style={{marginTop: 16}}>
        {
          this.props.fields && this.props.fields.map((cv, index) => {
            return <FormItem key={index} label={cv.label} colon={false}>
              {
                getFieldDecorator(cv.fieldName)(
                  <Input placeholder={'输入' + cv.label}/>
                )
              }
            </FormItem>
          })
        }
        <FormItem>
          <TextBtn type="primary" onClick={this.handleSearch.bind(this)} text="搜索"/>
          <TextBtn onClick={this.handleReset.bind(this)} text="清空"/>
        </FormItem>
      </Form>
    )
  }
}

SearchBarForm.propsType = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      fieldName: PropTypes.string.isRequired
    })
  ),
  onSearch: PropTypes.func.isRequired
}

SearchBarForm.defaultProps = {
  fields: [],
  onSearch: values => {
    console.log('[#]当前搜索的表单值为', values)
  }
}

export default Form.create()(SearchBarForm)