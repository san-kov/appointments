import React from 'react'
import { observer, inject } from 'mobx-react'
import HeaderWrapper, { TopBorder } from './styled/HeaderWrapper'
import { FaBell } from 'react-icons/fa'

@inject('authStore', 'appointmentStore')
@observer
class Header extends React.Component {
  componentDidMount() {
    this.props.authStore.pullUser()
  }
  render() {
    const { user } = this.props.authStore
    const { notifications } = this.props.appointmentStore
    return (
      <div>
        <TopBorder />
        <HeaderWrapper>
          <nav>
            <li>
              <img src={user && user.avatar} alt="" />
              <p>{user && user.name}</p>
            </li>
          </nav>
          <nav>
            <li>
              <div className="notification">
                <FaBell className="icon" size="23px" />
                {notifications > 0 && (
                  <div className="not-num">{notifications}</div>
                )}
              </div>
            </li>
          </nav>
        </HeaderWrapper>
      </div>
    )
  }
}

export default Header
