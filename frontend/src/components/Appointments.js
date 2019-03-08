import React from 'react'
import AppointWrapper from './styled/AppointWrapper'
import AppointsWrapper from './styled/AppointsWrapper'
import moment from 'moment'
export default function Appointments(props) {
  const { appoints } = props
  return (
    <AppointsWrapper>
      <h1>Your appointments:</h1>
      {appoints.map(a => (
        <AppointWrapper key={a._id}>
          <h3>{a.title}</h3>
          <p>{a.description}</p>
          <div className="author">
            <img src={a.owner.avatar} width="15px" alt="" />
            <div className="name">{a.owner.name} </div>
            <div className="date"> on {moment(a.date).format('L')}</div>
          </div>
        </AppointWrapper>
      ))}
    </AppointsWrapper>
  )
}
