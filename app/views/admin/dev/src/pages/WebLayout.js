import React from 'react'
import {Route, Link, Prompt, Redirect} from 'react-router-dom'
import {Layout, Menu, Icon} from 'antd';
import LogoImg from '@static/img/logo.svg'
import routes from '../routes'
import Login from './Login'
import Main from './Main'
import RoutesWithSub from './wiget/RoutesWithSub'

export default class WebLayout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }
  }

  render() {
    return (
      <Layout id="zlf-ant-layout">
        <Prompt message={(location, action) => {
          /*
           * location Object
           * action 'PUSH', 'POP'等
           */

          console.log('#拦截了' + action + '操作跳转', location)
        }}/>
        {
          routes.map((route, index) => <RoutesWithSub key={index} route={route}/>)
        }
      </Layout>
    )
  }
}