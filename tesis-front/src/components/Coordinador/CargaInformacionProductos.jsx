import Cabecera from "../ComponentesAuxiliares/Cabecera"
import ComboBoxComponent from "../ComponentesAuxiliares/ComboBox"
import './CargaInformacionProductos.css'

export const CargaInformacionProductos = () => {
  const options = [
    "BDF",
    "Carrefour",
    "Libertad",
    "Nivea",
    "Rinin",
    "Rexona",
    "Spadol",    
  ];
  const optionsSucursales = [
    "Suc 1",
    "Suc 2",
    "Suc 3"   
  ];
  const optionsProducts = [
    "Prod 1",
    "Prod 2",
    "Prod 3"   
  ];
  const items = [
    {url:'/informacionCliente',titulo:'Informacion Cliente'},
    {url:'/CargaInformacionProducto',titulo:'Carga Información Productos'},
  ];
  return (
    <div>
      <Cabecera titulo={"Cargar Información Productos"} items={items}/>
      <ComboBoxComponent options={options} placeholder="Cliente"/>
      <ComboBoxComponent options={optionsSucursales} placeholder="Sucursal"/>
      <div className="agregar-producto-div">
        <input type="text" className="agregar-producto-input"></input>
        <ComboBoxComponent options={optionsProducts} placeholder="Producto"/>
        <input type="text" className="agregar-producto-input"></input>
      </div>
    </div>
  )
}
