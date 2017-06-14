import React from 'react'
import {Route, Link, Prompt, Redirect} from 'react-router-dom'
import {Layout, Menu, Icon} from 'antd';
import LogoImg from '@static/img/logo.svg'
import routes from '../routes'
const {Header, Sider, Content, Footer} = Layout

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  componentDidMount() {
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout id="zlf-ant-layout">
        <Sider
          trigger={null}
          collapsible
          style={{background: '#fff', height: '100%'}}
          collapsed={this.state.collapsed}>
          <div className="logo">
            <img src={LogoImg} alt=""/><span className="zlf-logo-text">OUR OUR OUR</span>
          </div>
          <Menu mode="inline" defaultSelectedKeys={['/articles']}>
            <Menu.Item key="/article">
              <Link to="/article">
                <Icon type="book"/>
                <span className="nav-text">文章</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/expe">
              <Link to='/experience'>
                <Icon type="video-camera"/>
                <span className="nav-text">经历</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload"/>
              <span className="nav-text">图片</span>
            </Menu.Item>
            <Menu.Item>
              <Link to="/category">
                <Icon type="tags-o"/>
                <span className="nav-text">类别</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{padding: 0}}>
            <Icon
              className="trigger"
              style={{color: '#fff', padding: 0}}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle.bind(this)}
            />
          </Header>
          <Content style={{margin: '24px 16px', padding: 16, background: '#fff', minHeight: 280}}>
            <Prompt when={true} message={(location, action) => {
              /*
               * location Object
               * action 'PUSH', 'POP'等
               */
              console.log('#拦截了' + action + '操作跳转', location)
            }}/>
            {
              routes.map(route => <Route key={route.path} path={route.path} component={route.component}/>)
            }
          </Content>
          <Footer style={{padding: '16px 50px'}}>design ©2017 create by longfan.zheng</Footer>
        </Layout>
      </Layout>
    )
  }
}