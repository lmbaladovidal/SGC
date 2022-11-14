import Cabecera from "../ComponentesAuxiliares/Cabecera";
import ComboBoxComponent from "../ComponentesAuxiliares/ComboBox";
import { DataGridComponent } from "../ComponentesAuxiliares/DataGrid"
export const ClientesPorVendedor = () => {
  
  const columns = [
    { key: 'nro', name: 'Nro' },
    { key: 'razonSocial', name: 'Razon Social' },
    { key: 'provincia', name: 'Provincia' }
  ];
  
  const rows = [
    {nro: 0, razonSocial: 'Example',provincia:'Pendiente' },
    {nro: 1, razonSocial: 'Example',provincia:'Pendiente' },
    {nro: 2, razonSocial: 'Example',provincia:'Pendiente' },
    {nro: 3, razonSocial: 'Example',provincia:'Pendiente' },
    {nro: 4, razonSocial: 'Example',provincia:'Pendiente' },
    {nro: 5, razonSocial: 'Example',provincia:'Pendiente' },
    {nro: 6, razonSocial: 'Example',provincia:'Pendiente' },
    {nro: 7, razonSocial: 'Example',provincia:'Pendiente' },
    {nro: 8, razonSocial: 'Example',provincia:'Pendiente' },
    {nro: 9, razonSocial: 'Example',provincia:'Pendiente' },
  ];

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
    <div className="contenedor-consulta-pedido">
      <Cabecera titulo="Consulta Clientes Por Vendedor" items={items}/>
      <ComboBoxComponent options={options} placeholder="Vendedor"/>
      <div className="data-grid-consulta-pedidos">
        <DataGridComponent columns={columns} rows={rows} />
      </div>
    </div>

  )
}
