import Cabecera from "../ComponentesAuxiliares/Cabecera"
import { DataGridComponent } from "../ComponentesAuxiliares/DataGrid"
import './ConsultarPedido.css'

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'estado', name: 'Estado' }
];

const rows = [
  { id: 0, title: 'Example',estado:'Pendiente' },
  { id: 1, title: 'Example',estado:'Pendiente' },
  { id: 2, title: 'Example',estado:'Pendiente' },
  { id: 3, title: 'Example',estado:'Pendiente' },
  { id: 4, title: 'Example',estado:'Pendiente' },
  { id: 5, title: 'Example',estado:'Pendiente' },
  { id: 6, title: 'Example',estado:'Pendiente' },
  { id: 7, title: 'Example',estado:'Pendiente' },
  { id: 8, title: 'Example',estado:'Pendiente' },
  { id: 9, title: 'Example',estado:'Pendiente' },
  { id: 10, title: 'Demo',pedido:'test' }
];

export const ConsutlarPedido = () => {
  return (
    <div className="contenedor-consulta-pedido">
      <Cabecera titulo={'ConsultaPedidos'} items={['Perfil','Volver Al Menu']}/>
      <div className="data-grid-consulta-pedidos">
        <DataGridComponent columns={columns} rows={rows} />
      </div>
    </div>

  )
}
