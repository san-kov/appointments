import decodeJWT from 'jwt-decode'

export default () => {
  try {
    decodeJWT(localStorage.getItem('token'))
    return localStorage.getItem('token')
  } catch (error) {
    return null
  }
}
