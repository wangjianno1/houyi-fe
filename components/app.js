import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Login from './login'
import MainFrame from './mainframe'


class App extends Component {

    render() {
        return (
          <HashRouter>
            <MainFrame />
          </HashRouter>
        );
    }
}

export default App;
