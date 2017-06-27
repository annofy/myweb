/**
 *  creator: zheng
 *  date: 2017/6/19
 *  email: zhenglfsir@gmail.com
 */
import React from 'react'
import FuncTable from '@pages/wiget/FuncTable'
import SearchBarForm from '@pages/wiget/SearchBarForm'
import MainContent from '@pages/wiget/MainContent'
import BreadHeader from '@pages/wiget/BreadHeader'

export default class Software extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <BreadHeader items={[{icon: 'apple-o'}, {title: '精品软件'}]}/>
        <MainContent>

        </MainContent>
      </div>
    )
  }
}