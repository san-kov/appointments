import { observable, action } from 'mobx'
import { getMyAppoints } from '../services/appointsServices'
class AppointmentStore {
  @observable notifications = 0
  @observable appointments = []
  @observable loading = false

  pullAppointments = async () => {
    this.setLoading(true)
    const { data } = await getMyAppoints()

    console.log(data)
    this.appointments = data.appointments
    this.setLoading(false)
  }

  @action setLoading(loading) {
    this.loading = loading
  }
}

export default new AppointmentStore()
