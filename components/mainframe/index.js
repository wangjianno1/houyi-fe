import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Contents from '../content/main'
import Bottom from '../bottom'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import './index.css'

class MainFrame extends Component {

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout className="main-frame-layout">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>首页</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="pie-chart" />
              <span>仪表盘</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="heart" /><span>我的音乐</span></span>}
            >
              <Menu.Item key="3">金曲榜</Menu.Item>
              <Menu.Item key="4">播放列表</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="eye-o" /><span>日志监控</span></span>}
            >
              <Menu.Item key="5">发布进度</Menu.Item>
              <Menu.Item key="6">集群监控</Menu.Item>
              <Menu.Item key="7">机器监控</Menu.Item>
            </SubMenu>
            <Menu.Item key="8">
              <Icon type="share-alt" />
              <span>关于我</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Breadcrumb style={{ margin: '12px 16px' }}>
              <Breadcrumb.Item>日志监控</Breadcrumb.Item>
              <Breadcrumb.Item>发布进度</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Contents />
          <Bottom />
        </Layout>
      </Layout>
    );
  }
}

export default MainFrame;
