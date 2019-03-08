import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import Home from './pages/Home'
import Header from './components/Header'
import Welcome from './pages/Welcome'
import AddAppointment from './pages/AddAppointment'

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
                <Route path="/" exact component={Home} />
                <Route path="/add" exact component={AddAppointment} />
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
