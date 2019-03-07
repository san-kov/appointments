import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { observer, inject } from 'mobx-react'
import { clientId } from '../keys'
@inject('authStore')
@observer
class Login extends React.Component {
  render() {
    const { login, loading } = this.props.authStore
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Log In with Google"
          onSuccess={login}
          disabled={loading}
          style={{
            fontWeight: 'bold'
          }}
          onFailure={() => {}}
        >
          <b>Log In with Google</b>
        </GoogleLogin>
      </div>
    )
  }
}

export default Login
