import Cabecera from "../Cabecera"
import ComboBoxComponent from "../ComboBox"
import { BarChar } from "../BarChar"
import { useState } from "react"
import { CalendarComponent } from "../Calendar"
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
