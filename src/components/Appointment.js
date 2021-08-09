import React from 'react'
import PropTypes from 'prop-types'

export default function Appointment({appointment,deleteAppointment}) {

    const {petName, ownerName, date, time, symptom,id} = appointment

    return (
        <div className="cita">  
            <p>Mascota: <span>{petName}</span></p>
            <p>Dueño: <span>{ownerName}</span></p>
            <p>Fecha: <span>{date}</span></p>
            <p>Hora: <span>{time}</span></p>
            <p>Síntomas: <span>{symptom}</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={()=>deleteAppointment(id)}
            >Eliminar &times;</button>  
        </div>
    )
}

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment:PropTypes.func.isRequired,
}
