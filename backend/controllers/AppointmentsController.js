import User from '../models/User'
import Appointment from '../models/Appointment'

export const getMyAppointments = async ({ user }, res) => {
  const userDoc = await User.findById(user.id).populate({
    path: 'appointments',
    populate: {
      path: 'owner',
      model: 'user',
      select: { name: 1, avatar: 1 }
    }
  })

  res.send({ appointments: userDoc.appointments })
}

export const addAppointment = async (req, res) => {
  const { user } = req
  const { title, description } = req.body

  let appointment = await Appointment.create({
    owner: user.id,
    title,
    description,
    date: new Date()
  })

  appointment = await appointment.save()
  appointment = await Appointment.populate(appointment, {
    path: 'owner',
    select: { name: 1, avatar: 1 }
  })

  const foundUser = await User.findById(user.id)
  foundUser.appointments.push(appointment)

  await foundUser.save()
  res.send(appointment)
}
