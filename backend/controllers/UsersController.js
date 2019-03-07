import signToken from '../utils/signToken'

export const authGoogle = ({ user }, res) => {
  res.send({ token: signToken(user) })
}

export const me = ({ user }, res) => {
  const { name, avatar, _id } = user
  res.send({ name, avatar, _id })
}
