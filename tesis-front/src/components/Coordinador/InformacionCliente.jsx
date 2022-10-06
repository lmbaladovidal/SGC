import Cabecera from "../Cabecera"
import './InformacionCliente.css'

export const InformacionCliente = () => {
  const items = [
    {url:'/informacionCliente',titulo:'Informacion Cliente'},
    {url:'/CargaInformacionProducto',titulo:'Carga Información Productos'},
  ];
  return (
    <>
      <Cabecera titulo={"Información Clientes"} items={items}/>
      <div className="contenedor-info-cliente">
        <p className="texto-info-cliente">Nombre</p>
        <input type="text" name="" id="" className="input-info-cliente" />
        <p className="texto-info-cliente">Razon Social</p>
        <input type="text" name="" id="" className="input-info-cliente" />
        <p className="texto-info-cliente">Telefono</p>
        <input type="text" name="" id="" className="input-info-cliente" />
        <p className="texto-info-cliente">Provincia</p>
        <input type="text" name="" id="" className="input-info-cliente" />
        <p className="texto-info-cliente">Estado de Cuenta</p>
        <input type="text" name="" id="" className="input-info-cliente" />
        <p className="texto-info-cliente">Vendedor Asignado</p>
        <input type="text" name="" id="" className="input-info-cliente" />
        <button className="info-cliente-button">Guardar</button>
      </div>
    </>
  )
}
