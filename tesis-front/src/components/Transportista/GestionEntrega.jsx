import Cabecera from '../Cabecera'

const items = [
  {url:'/GestionEnterga',titulo:'Gestion de Entregas'},
  {url:'/ModificarRecorrido',titulo:'Modificar Recorridos'},
];

export const GestionEntrega = () => {
  return (
    <div><Cabecera titulo={"Gestion de Entrega"} items={items}/></div>
  )
}
