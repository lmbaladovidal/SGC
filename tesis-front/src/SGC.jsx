import { useState } from 'react'
import { Menu, Perfil } from './components'
import { Login } from './components/login'
import { Routes, Route } from 'react-router-dom';  
import { ConsultaCliente, InformacionCliente } from './components/Coordinador'
import { ConsutlarPedido } from './components/Cliente'
import {CargaInformacionProductos} from './components/Coordinador/CargaInformacionProductos'
import {GestionEntrega} from './components/Transportista/GestionEntrega'
import {ModificarRecorrido} from './components/Transportista/ModificarRecorrido'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>   
          <Route exact path="/" element={  <Login/> }></Route>        
          <Route exact path="/menu" element={  <Menu/> }></Route>        
          <Route exact path="/ConsultaCliente" element={  <ConsultaCliente/> }></Route>        
          <Route exact path="/informacionCliente" element={  <InformacionCliente/> }></Route>        
          <Route exact path="/ConsultaPedido" element={  <ConsutlarPedido/> }></Route>        
          <Route exact path="/CargaInformacionProducto" element={  <CargaInformacionProductos/> }></Route>        
          <Route exact path="/gestionEnterga" element={  <GestionEntrega/> }></Route>        
          <Route exact path="/ModificarRecorrido" element={  <ModificarRecorrido/> }></Route>        
        </Routes>
    </div>
  )
}

export default App
