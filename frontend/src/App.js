import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import Home from './pages/Home'
import Header from './components/Header'
import Welcome from './pages/Welcome'
@inject('authStore')
@observer
class App extends Component {
  render() {
    const { token } = this.props.authStore
    if (token) {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      )
    }

    return <Welcome />
  }
}

export default App
