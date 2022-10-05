import Cabecera from "../Cabecera"
import ComboBoxComponent from "../ComboBox"
import { BarChar } from "../BarChar"
import { useState } from "react"
import { CalendarComponent } from "../Calendar"

export const ConsultaCliente = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const [data,setData] = useState({
    labels,
    datasets: []
  })
  return (
    <>
      <Cabecera titulo="Consulta Clientes"/>
      <ComboBoxComponent/>
      <BarChar chartData={data}/>
      <CalendarComponent/>
    </>
  )
}
