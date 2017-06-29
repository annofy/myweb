import React from 'react'
import {Route, Link, Redirect} from 'react-router-dom'
import {Layout, Menu, Icon} from 'antd';
import LogoImg from '@static/img/logo.svg'
import RoutesWithSub from './wiget/RoutesWithSub'
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
    const {routes} = this.props
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
            <Menu.Item key="/home/article">
              <Link to="/home/article">
                <Icon type="book"/>
                <span className="nav-text">文章</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/home/expe">
              <Link to='/home/experience'>
                <Icon type="video-camera"/>
                <span className="nav-text">经历</span>
              </Link>
            </Menu.Item>
            <Menu.SubMenu key="sub2" title={<span><Icon type="appstore"/><span className="nav-text">记录</span></span>}>
              <Menu.Item key="5">
                <Link to="/home/record/soft">软件记录</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/home/record/module">模块记录</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="3">
              <Icon type="upload"/>
              <span className="nav-text">图片</span>
            </Menu.Item>
            <Menu.SubMenu key="sub3"
                          title={<span><Icon type="tags-o"></Icon><span className="nav-text">分类</span></span>}>
              <Menu.Item>
                <Link to="/home/category">
                  <span className="nav-text">类别</span>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/home/entity">
                  <span className="nav-text">实体</span>
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
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
            {
              routes.map((route, index) => <RoutesWithSub key={index} route={route}/>)
            }
          </Content>
          <Footer style={{padding: '16px 50px'}}>design ©2017 create by longfan.zheng</Footer>
        </Layout>
      </Layout>
    )
  }
}