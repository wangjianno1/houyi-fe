import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import './index.less'

const { Header } = Layout
const SubMenu = Menu.SubMenu
 
class Top extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'wangjianno1'
        })
    }

    render() {
      return (
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.props.toggle}
          />
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>日志监控</Breadcrumb.Item>
            <Breadcrumb.Item>发布进度</Breadcrumb.Item>
          </Breadcrumb>
          <Menu mode="horizontal" className="logout" onClick={this.clear}>
            <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>} >
              <Menu.Item key="logout"><Link to="/login" >退出</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
      );
    }
}

export default Top;
