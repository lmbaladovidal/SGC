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
  const options = [
    "BDF",
    "Carrefour",
    "Libertad",
    "Nivea",
    "Rinin",
    "Rexona",
    "Spadol",    
  ];
  const items = [
    {url:'/informacionCliente',titulo:'Informacion Cliente'},
    {url:'/CargaInformacionProducto',titulo:'Carga Información Productos'},
  ];
  return (
    <div className="contenedor-consulta-clientes">
      <Cabecera titulo="Consulta Clientes" items={items}/>
      <ComboBoxComponent options={options} placeholder={"Cliente"}/>
      <BarChar chartData={data}/>
      <CalendarComponent/>
      <button className="consulta-cliente-button"><a href="/informacionCliente" className="consulta-cliente-a">Información Cliente</a></button>
    </div>
  )
}
