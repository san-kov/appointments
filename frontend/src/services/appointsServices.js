import client from './client'

export const getMyAppoints = () => client.get('/appoints/')

export const addAppointment = appointment =>
  client.post('/appoints/', appointment)
