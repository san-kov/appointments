import React from 'react'
import AddPageWrapper from '../components/styled/AddPageWrapper'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'

import Button from '../components/styled/Button'
@inject('appointmentStore')
@observer
class AddAppointment extends React.Component {
  @observable
  appointment = {
    title: '',
    description: ''
  }

  @action
  changeTitle = e => {
    this.appointment.title = e.target.value
  }

  @action
  changeDescription = e => {
    this.appointment.description = e.target.value
  }

  handleSubmit = async e => {
    e.preventDefault()
    await this.props.appointmentStore.addAppointment(this.appointment)
    this.props.history.push('/')
  }
  render() {
    const { title, description } = this.appointment
    const { changeTitle, changeDescription } = this
    const { loading } = this.props.appointmentStore
    return (
      <AddPageWrapper>
        <h1>Add appointment</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            value={title}
            onChange={changeTitle}
            placeholder="Title"
          />
          <textarea
            required
            type="text"
            value={description}
            onChange={changeDescription}
            placeholder="Description"
          />
          <Button type="submit">{loading ? 'Loading' : 'Add'}</Button>
        </form>
      </AddPageWrapper>
    )
  }
}

export default AddAppointment
