import React, { Component } from 'react';
import { Layout } from 'antd'

import './index.less'

const { Footer } = Layout
 
class Bottom extends Component {

    render() {
      return (
        <Footer className="bottom">
          SOHU.COM ©2017 Created by zhijianwang@sohu-inc.com
        </Footer>
      );
    }
}

export default Bottom;
