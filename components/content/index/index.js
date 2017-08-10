import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import './index.less'
 
class IndexPage extends Component {

    render() {
      return (
        <div id="xxxxx" style={{ margin: '12px 0', padding: 24, background: '#fff', minHeight: 400 }}>
           This is index page.
        </div>
      );
    }
}

export default IndexPage;
