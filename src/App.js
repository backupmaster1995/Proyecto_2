import Form from "./components/Form"
import Appointment from "./components/Appointment"
import {useState, useEffect} from "react"

function App() {

  //Viendo si existe en LocalStorage
  let initialAppointments = JSON.parse(localStorage.getItem("Appointment")) 
  if(!initialAppointments) {
    initialAppointments = []
  }

  const [appointmentList, setAppointmentList] = useState(initialAppointments)

  const saveAppointment = (appointment) =>{
    setAppointmentList([...appointmentList,appointment])
  }

  useEffect(()=>{
    if(initialAppointments) {
      localStorage.setItem("Appointment", JSON.stringify(appointmentList))
    }
  },[appointmentList])

  const deleteAppointment = (id) => {
    const updatedAppointments = appointmentList.filter((appointment)=>appointment.id !== id)
    return setAppointmentList(updatedAppointments)
  }

  const appointmentTitle = appointmentList.length === 0 ? "No hay citas pautadas" : "Administra tus citas"

  return (
    <>
      <h1>Administrador de Pacientes</h1>
    
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              saveAppointment={saveAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{appointmentTitle}</h2>
            {
              appointmentList.map((appointment)=>{
                return <Appointment 
                  key={appointment.id}
                  appointment={appointment}
                  deleteAppointment={deleteAppointment}
                  appointmentList={appointmentList}
                />
              })
            }
          </div>
        </div>
      </div>
    
    </>
  );
}

export default App;
