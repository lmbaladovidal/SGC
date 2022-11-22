
import Cabecera from "../ComponentesAuxiliares/Cabecera";
import { DataGridComponent } from "../ComponentesAuxiliares/DataGrid";
export const ConsultaVendedores = () => {  const columns = [
  { key: 'nro', name: 'Nro' },
  { key: 'nombre', name: 'Nombre' },
  { key: 'zona', name: 'Zona' }
];

const rows = [
  {nro: 1, nombre: 'Example',zona:'2' },
  {nro: 2, nombre: 'Example',zona:'1' },
  {nro: 3, nombre: 'Example',zona:'6' },
  {nro: 4, nombre: 'Example',zona:'5' },
  {nro: 5, nombre: 'Example',zona:'9' },
  {nro: 6, nombre: 'Example',zona:'12' },
  {nro: 0, nombre: 'Example',zona:'7' },
  {nro: 7, nombre: 'Example',zona:'3' },
  {nro: 8, nombre: 'Example',zona:'8' },
  {nro: 9, nombre: 'Example',zona:'11' },
];

const items = [{url:'/informacionCliente',titulo:'Informacion Cliente'},
               {url:'/CargaInformacionProducto',titulo:'Carga Información Productos'},];

return (
  <div className="contenedor-consulta-pedido">
    <Cabecera titulo="Consulta Vendedores" items={items}/>
    <div className="data-grid-consulta-pedidos">
      <DataGridComponent columns={columns} rows={rows} />
    </div>
  </div>

)
}
