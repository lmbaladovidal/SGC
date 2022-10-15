import Cabecera from '../ComponentesAuxiliares/Cabecera'
import './InformacionCliente.css'

export const InformacionVendedor = () => {
  const items = [
    {url:'/informacionVendedor',titulo:'Informacion Vendedor'},
  ];
  return (
    <>
      <Cabecera titulo={"Información Vendedor"} items={items}/>
      <div className="contenedor-info-cliente">
        <p className="texto-info-cliente">Nombre</p>
        <input type="text" name="" id="" className="input-info-cliente" />
        <p className="texto-info-cliente">Provincia</p>
        <input type="text" name="" id="" className="input-info-cliente" />
        <p className="texto-info-cliente">Telefono</p>
        <input type="text" name="" id="" className="input-info-cliente" />
        <p className="texto-info-cliente">Email</p>
        <input type="text" name="" id="" className="input-info-cliente" />
        <button className="info-cliente-button">Guardar</button>
      </div>
    </>
  )
}
