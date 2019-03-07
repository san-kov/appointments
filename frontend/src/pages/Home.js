import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('appointmentStore')
@observer
class Home extends Component {
  componentDidMount() {
    const { pullAppointments } = this.props.appointmentStore

    pullAppointments()
  }
  render() {
    const { appointments, loading } = this.props.appointmentStore
    if (loading) return <p>loading</p>
    return (
      <div>
        <div style={{ margin: 10 }}>
          {appointments.length > 0
            ? appointments.map(a => (
                <p key={a._id}>
                  {a.title}
                  <br />
                  {a.description}
                  <br />
                  <b>{a.owner.name}</b>
                </p>
              ))
            : 'You have no appointments'}
        </div>
      </div>
    )
  }
}

export default Home
