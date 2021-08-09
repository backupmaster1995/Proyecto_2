import React from 'react'
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

export default function Form({saveAppointment}) {

    //Estado de los campo del formulario
    const [appointment, setAppointment] = useState({
        petName: "",
        ownerName: "",
        date: "",
        time:"",
        symptom:""
    })

    //Estado manejo de errores
    const [error, setError] = useState(false)

    //Modificar el estado de los campos
    const handleChange = (e) => {
      setAppointment({
          ...appointment,
          [e.target.name]: e.target.value,
      })
    }

    const {petName,ownerName,date,time,symptom} = appointment

    //Acciones a la hora del submit
    const submitAppointment = (e)=>{
        
        e.preventDefault();
        
        //Validacion de los campos
        if(petName === "" || ownerName === "" || date === "" || time === "" || symptom === "") {
            return setError(true)
        }

        //lo de aca pasara si no hay errores

        //poniendo los errores en false
        setError(false)

        //Creacion de una propiedad ID y un id unico para cada cita
        appointment.id = uuidv4();

        //Guardamos la cita 
        saveAppointment(appointment)

        //Reiniciamos el formulario
        return setAppointment({
            petName: "",
            ownerName: "",
            date: "",
            time:"",
            symptom:""
        })

    }

    return (
        <>
            <h2>Crear Cita</h2>

            {
                error && <p className="alerta-error">Todos los campos son obligatorios</p>
            }

            <form
                onSubmit={submitAppointment}
            >
                <label>Nombre de la mascota</label>
                <input 
                    type="text"
                    name="petName"
                    className="u-full-width"
                    placeholder="Ej: Luna"
                    onChange={handleChange}
                    value={petName}
                />

                <label>Nombre del dueño</label>
                <input 
                    type="text"
                    name="ownerName"
                    className="u-full-width"
                    placeholder="Ej: Juan"
                    onChange={handleChange}
                    value={ownerName}
                />

                <label>Fecha de alta</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />

                <label>Horario</label>
                <input 
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="symptom"
                    placeholder="Ej: tos"
                    onChange={handleChange}
                    value={symptom}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </>
    )
}

Form.propTypes = {
    saveAppointment: PropTypes.func.isRequired
}
