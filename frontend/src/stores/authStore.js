import { observable } from 'mobx'
import client from '../services/client'
import * as authServices from '../services/authServices'
import getToken from '../services/getToken'

class AuthStore {
  @observable user = null
  @observable token = getToken()
  @observable loading = false

  pullUser = async () => {
    const { data } = await authServices.getUserData()

    this.user = data
  }

  login = async ({ accessToken }) => {
    this.loading = true

    try {
      const {
        data: { token }
      } = await authServices.login(accessToken)

      this.loading = false
      this.token = token
      localStorage.setItem('token', token)
      client.defaults.headers['Authorization'] = `Bearer ${token}`
    } catch (error) {
    } finally {
      this.loading = false
    }
  }
}

export default new AuthStore()
