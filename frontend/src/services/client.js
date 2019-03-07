import axios from 'axios'
import getToken from './getToken'

const client = axios.create({
  baseURL: 'http://localhost:8080/api/'
})

if (getToken()) {
  client.defaults.headers['Authorization'] = `Bearer ${localStorage.token}`
}

export default client
