import {ConsutlarPedido} from './Cliente';
import {CargaInformacionProductos, ClientesPorVendedor,ConsultaCliente,ConsultaVendedores,
        EstadoSucursales,InformacionCliente,VentasPorVendedor,VisualizadorGeo} from './Coordinador'
import {GestionEntrega,ModificarRecorrido} from './Transportista'
import {Perfil} from './index'
import { ButtonCard } from './ComponentesAuxiliares/ButtonCard';
import consultarPedido from '../assets/Checklist_Flat.svg'
import cargarInformacionProductos from '../assets/Review_Flat.svg'
import clientesPorVendedor from '../assets/Team_Flat.svg'
import consultaCLiente from '../assets/Client_Flat.svg'
import consultaVendedores from '../assets/Seller_Flat.svg'
import estadoSucursales from '../assets/Shop_Flat.svg'
import visualizadorGeo from '../assets/Network_Flat.svg'
import gestionEntrega from '../assets/Delivery_Box_Flat.svg'
import modificarRecorrido from '../assets/Delivery_Truck_Flat.svg'
import Cabecera from './ComponentesAuxiliares/Cabecera';
import MenuLateral from './ComponentesAuxiliares/MenuLateral';
import './Menu.css'


export const Menu = () => {
  const items = [
    {url:'/informacionCliente',titulo:'Informacion Cliente'},
    {url:'/informacionCliente',titulo:'Carga Información Productos'},
  ];
  return (
    <div className='contenedor-menu'>
      <Cabecera titulo="Menu Principal" items={items}/>
      <div className='menu'>
        <ButtonCard image={cargarInformacionProductos} seccion="Cargar Informacion Producto" url={"/CargarInformacionProducto"}/>
        <ButtonCard image={clientesPorVendedor} seccion="Consultar Clientes por Vendedor" url={"/ClientePorVendedor"}/>
        <ButtonCard image={consultaCLiente} seccion="Consultar Clientes" url={"/ConsultaCliente"}/>
        <ButtonCard image={consultarPedido} seccion="Consultar Pedido" url={"/ConsultaPedido"}/>
        <ButtonCard image={consultaVendedores} seccion="Consultar Vendedores" url={"/ConsultaVendedores"}/>
        <ButtonCard image={estadoSucursales} seccion="Estado Sucursales" url={"/EstadoSucursales"}/>
        <ButtonCard image={gestionEntrega} seccion="Gestión Entrega" url={"/GestionEnterga"}/>
        <ButtonCard image={modificarRecorrido} seccion="Modificar Recorrido" url={"/ModificarRecorrido"}/>
        <ButtonCard image={VentasPorVendedor} seccion="Ventas Por Vendedor" url={"/VentasPorVendedor"}/>
        <ButtonCard image={visualizadorGeo} seccion="Visualizador Geo"/>
      </div>
    </div>
  )
}
