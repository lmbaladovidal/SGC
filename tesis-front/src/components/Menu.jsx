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
        <ButtonCard image={consultarPedido} seccion="Consultar Pedido" url={""}/>
        <ButtonCard image={cargarInformacionProductos} seccion="Cargar Informacion Producto"/>
        <ButtonCard image={clientesPorVendedor} seccion="Consultar Clientes por Vendedor"/>
        <ButtonCard image={consultaCLiente} seccion="Consultar Clientes" url={"/ConsultaCliente"}/>
        <ButtonCard image={consultaVendedores} seccion="Consultar Vendedores"/>
        <ButtonCard image={estadoSucursales} seccion="Estado Sucursales"/>
        <ButtonCard image={visualizadorGeo} seccion="Visualizador Geo"/>
        <ButtonCard image={gestionEntrega} seccion="Gestión Entrega" url={"/GestionEnterga"}/>
        <ButtonCard image={modificarRecorrido} seccion="Modificar Recorrido" url={"/ModificarRecorrido"}/>
      </div>
    </div>
  )
}
