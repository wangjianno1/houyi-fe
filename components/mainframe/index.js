import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Contents from '../content/main'
import Bottom from '../bottom'
import Top from '../top'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import './index.less'

class MainFrame extends Component {

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout className="main-frame-layout">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">
            <Icon type="github" className="logo-icon"/>
            <span className="logo-span">后羿</span>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/index">
                <Icon type="home" /><span>首页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/todo">
                <Icon type="pie-chart" /><span>仪表盘</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="customer-service" /><span>我的音乐</span></span>}
            >
              <Menu.Item key="3"><Link to="/music">金曲榜</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/todo">播放列表</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="eye-o" /><span>日志监控</span></span>}
            >
              <Menu.Item key="5"><Link to="/todo">发布进度</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/todo">集群监控</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/todo">机器监控</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="8">
              <Link to="/todo">
                <Icon type="share-alt" /><span>关于我</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Top toggle={this.toggle} collapsed={this.state.collapsed}/>
          <Contents />
          <Bottom />
        </Layout>
      </Layout>
    );
  }
}

export default MainFrame;
