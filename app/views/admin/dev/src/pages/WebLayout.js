import React from 'react'
import {Route, Link, Prompt, Redirect} from 'react-router-dom'
import {Layout, Menu, Icon} from 'antd';
import LogoImg from '@static/img/logo.svg'
import routes from '../routes'
import Login from './Login'
import Main from './Main'
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
        <Route path="/" render={(props) => {
          if (this.state.isLogin) {
            console.log('#', props)
            return <Main {...props}/>
          } else {
            console.log('#', props)
            return <Login/>
          }
        }}/>
        <Route path="/login" render={() => {
          return <Redirect to={{pathname: '/', search: "isLogin=true", hash: 'login'}} push={false}/>
        }}/>
      </Layout>
    )
  }
}