import {ConsutlarPedido} from './Cliente';
import {CargaInformacionProductos, ClientesPorVendedor,ConsultaCliente,ConsultaVendedores,
        EstadoSucursales,InformacionCliente,VentasPorVendedor,VisualizadorGeo} from './Coordinador'
import {GestionEntre,ModificarRecorrido} from './Transportista'
import {Perfil} from './index'


export const Menu = () => {
  return (
    <>
      <div>Menu</div>
      <ConsutlarPedido/>
      <CargaInformacionProductos/>
      <ClientesPorVendedor/>
      <ConsultaCliente/>
      <ConsultaVendedores/>
      <EstadoSucursales/>
      <InformacionCliente/>
      <VentasPorVendedor/>
      <VisualizadorGeo/>
      <GestionEntre/>
      <ModificarRecorrido/>
      <Perfil/>
    </>
  )
}
