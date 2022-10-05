import {ConsutlarPedido} from './Cliente';
import {CargaInformacionProductos, ClientesPorVendedor,ConsultaCliente,ConsultaVendedores,
        EstadoSucursales,InformacionCliente,VentasPorVendedor,VisualizadorGeo} from './Coordinador'
import {GestionEntrega,ModificarRecorrido} from './Transportista'
import {Perfil} from './index'
import { ButtonCard } from './ButtonCard';
import consultarPedido from '../assets/Checklist_Flat.svg'
import cargarInformacionProductos from '../assets/Review_Flat.svg'
import clientesPorVendedor from '../assets/Team_Flat.svg'
import consultaCLiente from '../assets/Client_Flat.svg'
import consultaVendedores from '../assets/Seller_Flat.svg'
import estadoSucursales from '../assets/Shop_Flat.svg'
import visualizadorGeo from '../assets/Network_Flat.svg'
import gestionEntrega from '../assets/Delivery_Box_Flat.svg'
import modificarRecorrido from '../assets/Delivery_Truck_Flat.svg'
import Cabecera from './Cabecera';
import MenuLateral from './MenuLateral';
import './Menu.css'


export const Menu = () => {
  return (
    <div className='contenedor-menu'>
      <Cabecera titulo="Menu Principal"/>
      <h1>Menu</h1>
      <div className='menu'>
        <ButtonCard image={consultarPedido} seccion="Consultar Pedido" url={""}/>
        <ButtonCard image={cargarInformacionProductos} seccion="Cargar Informacion Producto"/>
        <ButtonCard image={clientesPorVendedor} seccion="Consultar Clientes por Vendedor"/>
        <ButtonCard image={consultaCLiente} seccion="Consultar Clientes" url={"/ConsultaCliente"}/>
        <ButtonCard image={consultaVendedores} seccion="Consultar Vendedores"/>
        <ButtonCard image={estadoSucursales} seccion="Estado Sucursales"/>
        <ButtonCard image={visualizadorGeo} seccion="Visualizador Geo"/>
        <ButtonCard image={gestionEntrega} seccion="Gestión Entrega"/>
        <ButtonCard image={modificarRecorrido} seccion="Modificar Recorrido"/>
      </div>
      <VentasPorVendedor/>
      <Perfil/>
    </div>
  )
}
