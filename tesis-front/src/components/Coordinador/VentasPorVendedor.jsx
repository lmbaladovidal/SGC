import Cabecera from "../ComponentesAuxiliares/Cabecera"
import ComboBoxComponent from "../ComponentesAuxiliares/ComboBox"
import { BarChar } from "../ComponentesAuxiliares/BarChar"
import { useState } from "react"
import { CalendarComponent } from "../ComponentesAuxiliares/Calendar"
import './ConsultaCliente.css'

export const VentasPorVendedor = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const [data,setData] = useState({
    labels,
    datasets: []
  })
  const options = [
    "vendedor 1",
    "vendedor 2",
    "vendedor 3",
    "vendedor 4",
    "vendedor 5",
    "vendedor 6",
    "vendedor 7",
    "vendedor 8",
  ];
  const items = [
    {url:'/informacionCliente',titulo:'Informacion Cliente'},
    {url:'/CargaInformacionProducto',titulo:'Carga Información Productos'},
  ];
  return (
    <div className="contenedor-consulta-clientes">
      <Cabecera titulo="Ventas Por Vendedor" items={items}/>
      <ComboBoxComponent options={options} placeholder={"Vendedor"}/>
      <BarChar chartData={data}/>
      <CalendarComponent/>
      <button className="consulta-cliente-button"><a href="/InformacionVendedor" className="consulta-cliente-a">Información vendedor</a></button>
    </div>
  )
}

