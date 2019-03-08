import { observable, action } from 'mobx'
import { getMyAppoints, addAppointment } from '../services/appointsServices'
class AppointmentStore {
  @observable notifications = 0
  @observable appointments = []
  @observable loading = false
  @observable loaded = false

  pullAppointments = async () => {
    this.setLoading(true)
    const { data } = await getMyAppoints()

    console.log(data)
    this.appointments = data.appointments
    this.setLoading(false)
    this.setLoaded()
  }

  @action setLoaded = () => {
    this.loaded = true
  }
  @action setLoading = loading => {
    this.loading = loading
  }

  addAppointment = async appointment => {
    this.setLoading(true)
    const app = await addAppointment(appointment)
    this.appointments.push(app.data)
    this.setLoading(false)

    console.log(app.data)
  }
}

export default new AppointmentStore()
