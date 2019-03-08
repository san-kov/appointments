import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Appointments from '../components/Appointments'

@inject('appointmentStore')
@observer
class Home extends Component {
  componentDidMount() {
    const { pullAppointments, loaded } = this.props.appointmentStore

    if (!loaded) {
      pullAppointments()
    }

    console.log(loaded)
    console.log('mounted')
  }
  render() {
    const { appointments, loading } = this.props.appointmentStore
    if (loading) return <p>loading</p>
    return (
      <div>
        <div style={{ margin: 10 }}>
          {appointments.length > 0 ? (
            <Appointments appoints={appointments} />
          ) : (
            'You have no appointments'
          )}
        </div>
      </div>
    )
  }
}

export default Home
