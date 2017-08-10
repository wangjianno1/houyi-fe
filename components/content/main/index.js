import React, { Component } from 'react';
import { Layout } from 'antd'

import './index.less'

const { Content } = Layout
 
class Contents extends Component {

    render() {
      return (
        <Content className="content">
           This is route page...
        </Content>
      );
    }
}

export default Contents;
