import {ConsutlarPedido} from './Cliente';
import {CargaInformacionProductos, ClientesPorVendedor,ConsultaCliente,ConsultaVendedores,
        EstadoSucursales,InformacionCliente,VentasPorVendedor,VisualizadorGeo} from './Coordinador'
import {GestionEntre,ModificarRecorrido} from './Transportista'
import {Perfil} from './index'
import { ButtonCard } from './ButtonCard';


export const Menu = () => {
  return (
    <>
      <h1>Menu</h1>
      <ButtonCard image="prueba" seccion="prueba"/>
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
