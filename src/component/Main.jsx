import React from 'react'
import AppointmentDetails from './AppointmentDetails'
import Login from './Login'

function Main({isLoggedIn = false}) {

  return (
    <div>
      {isLoggedIn ? <AppointmentDetails/> : <Login />}
    </div>
  )
}

export default Main;
