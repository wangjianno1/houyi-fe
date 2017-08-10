import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import { Layout } from 'antd'
import IndexPage from '../index'
import MusicPage from '../music'
import TodoPage from '../todo'

import './index.less'

const { Content } = Layout
 
class Contents extends Component {

    render() {
      return (
        <Content className="content">
          <Redirect from="/" to="/index" />
          <Route path="/index" component={IndexPage} />
          <Route path="/music" component={MusicPage} />
          <Route path="/todo" component={TodoPage} />
          <Redirect from='*' to="/index" />
        </Content>
      );
    }
}

export default Contents;
