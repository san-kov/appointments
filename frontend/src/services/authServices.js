import client from './client'

export const getUserData = () => client.get('/users/me')

export const login = accessToken =>
  client.post(`/users/auth`, { access_token: accessToken })
