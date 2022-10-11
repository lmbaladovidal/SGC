import Cabecera from '../Cabecera';
const items = [
  {url:'/GestionEnterga',titulo:'Gestion de Entregas'},
  {url:'/ModificarRecorrido',titulo:'Modificar Recorridos'},
];


export const ModificarRecorrido = () => {
  return (
    <div><Cabecera titulo={"Modificar Recorrido"} items={items}/></div>
  )
}
