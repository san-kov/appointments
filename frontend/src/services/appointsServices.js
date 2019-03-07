import client from './client'

export const getMyAppoints = () => {
  return client.get('/appoints/')
}
