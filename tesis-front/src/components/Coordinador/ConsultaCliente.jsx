import Cabecera from "../ComponentesAuxiliares/Cabecera"
import ComboBoxComponent from "../ComponentesAuxiliares/ComboBox"
import { BarChar } from "../ComponentesAuxiliares/BarChar"
import { useState } from "react"
import { CalendarComponent } from "../ComponentesAuxiliares/Calendar"
import './ConsultaCliente.css'

export const ConsultaCliente = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const [data,setData] = useState({
    labels,
    datasets: []
  })
  const items = ['Perfil','Informacion Cliente']
  return (
    <div className="contenedor-consulta-clientes">
      <Cabecera titulo="Consulta Clientes" items={items}/>
      <ComboBoxComponent/>
      <BarChar chartData={data}/>
      <CalendarComponent/>
      <button className="consulta-cliente-button"><a href="/informacionCliente" className="consulta-cliente-a">Información Cliente</a></button>
    </div>
  )
}
