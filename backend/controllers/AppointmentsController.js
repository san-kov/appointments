import User from '../models/User'
import Appointment from '../models/Appointment'

export const getMyAppointments = async ({ user }, res) => {
  const userDoc = await User.findById(user.id).populate({
    path: 'appointments',
    populate: {
      path: 'owner',
      model: 'user',
      select: { name: 1 }
    } 
  })

  res.send({ appointments: userDoc.appointments })
}
