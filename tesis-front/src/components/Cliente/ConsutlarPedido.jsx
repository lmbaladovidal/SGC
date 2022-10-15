import Cabecera from "../ComponentesAuxiliares/Cabecera"
import { DataGridComponent } from "../ComponentesAuxiliares/DataGrid"
import './ConsultarPedido.css'

export const ConsutlarPedido = () => {
  
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'estado', name: 'Estado' }
  ];
  
  const rows = [
    {key:0, id: 0, title: 'Example',estado:'Pendiente' },
    {key:1, id: 1, title: 'Example',estado:'Pendiente' },
    {key:2, id: 2, title: 'Example',estado:'Pendiente' },
    {key:3, id: 3, title: 'Example',estado:'Pendiente' },
    {key:4, id: 4, title: 'Example',estado:'Pendiente' },
    {key:5, id: 5, title: 'Example',estado:'Pendiente' },
    {key:6, id: 6, title: 'Example',estado:'Pendiente' },
    {key:7, id: 7, title: 'Example',estado:'Pendiente' },
    {key:8, id: 8, title: 'Example',estado:'Pendiente' },
    {key:9, id: 9, title: 'Example',estado:'Pendiente' },
    {key:10, id: 10, title: 'Demo',pedido:'test' }
  ];
  return (
    <div className="contenedor-consulta-pedido">
      <Cabecera titulo={'ConsultaPedidos'} items={['Perfil','Volver Al Menu']}/>
      <div className="data-grid-consulta-pedidos">
        <DataGridComponent columns={columns} rows={rows} />
      </div>
    </div>

  )
}
