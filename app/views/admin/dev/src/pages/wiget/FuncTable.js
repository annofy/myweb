import React from 'react'
import {Table} from 'antd'
import PropTypes from 'prop-types'

const default_row_selection = {
  type: 'checkbox'
}
const default_pagination = {
  total: 0,
  showTotal: (total) => {
    return `当前共${total}页`
  },
  pageSize: 10,
  current: 0
}
const default_table = {
  size: 'default',
  loading: true,
  rowKey: '_id'
}

export default class FuncTable extends React.Component {

  get rowSelection() {
    return {...default_row_selection, ...this.props.rowSelection}
  }

  get pagination() {
    return {...default_pagination, ...this.props.pagination}
  }

  get tableOptions() {
    return {...default_table, ...this.props.tableOptions}
  }

  get hasSearch() {
    return this.props.hasSearch
  }

  render() {
    return (
      <div>
        {
          this.hasSearch && <div style={{marginBottom: 16}}>
            {this.props.children}
          </div>
        }
        <Table dataSource={this.props.data} columns={this.props.columns} rowSelection={this.rowSelection}
               pagination={this.pagination} size={this.tableOptions.size} loading={this.tableOptions.loading}
               onChange={this.props.onChange} rowKey={this.tableOptions.rowKey}>
        </Table>
      </div>
    )
  }
}

FuncTable.propTypes = {
  hasSearch: PropTypes.bool,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  tableOptions: PropTypes.object,
  rowSelection: PropTypes.object,
  pagination: PropTypes.object
}

FuncTable.defaultProps = {
  hasSearch: true,
  data: [],
  columns: [],
  tableOptions: {},
  pagination: {},
  rowSelection: {}
}
