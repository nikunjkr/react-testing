import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {appointmentDetailsMock} from '../mocks/AppointmentDetails'

function AppointmentDetails(props) {

  const [appointmentDetails, setAppointmentDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=> {
      setAppointmentDetails(appointmentDetailsMock);
      setIsLoading(false);
    })
  }, [])

  if(isLoading) {
    return <p>Loading..</p>
  }

  return (
    <section>
      <div>
        </div>
        <p>
          Appointment Time
        </p>
        <p>{appointmentDetails.appointmentTime}</p>
        <p> {appointmentDetails.doctorName}</p>
        <p>Booked for {appointmentDetails.patientName}</p>
      <img src={appointmentDetails.doctorImage} alt={appointmentDetails.doctorName} />
    </section>
  )
}

AppointmentDetails.propTypes = {}

export default AppointmentDetails
