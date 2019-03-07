import client from './client'

export const getUserData = token => {
  return client.get('/users/me')
}

export const login = accessToken => {
  return client.post(`/users/auth`, { access_token: accessToken })
}
