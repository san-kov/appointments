import React, { Component } from 'react'

import styled from 'styled-components'

import Login from '../components/Login'

const WelcomeWrapper = styled.div`
  height: 100vh;
  background: #ea2a2a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 39px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default class Welcome extends Component {
  render() {
    return (
      <WelcomeWrapper>
        <div>
          <h1>Welcome to Appoint</h1>
          <Login />
        </div>
      </WelcomeWrapper>
    )
  }
}
