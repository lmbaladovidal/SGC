import { useState } from 'react'
import { Menu, Perfil } from './components'
import { Login } from './components/login'
import { Routes, Route } from 'react-router-dom';  
import { CargaInformacionProductos, ConsultaCliente, InformacionCliente } from './components/Coordinador'
import './index.css'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>   
          <Route exact path="/" element={  <Login/> }></Route>        
          <Route exact path="/menu" element={  <Menu/> }></Route>        
          <Route exact path="/ConsultaCliente" element={  <ConsultaCliente/> }></Route>        
          <Route exact path="/informacionCliente" element={  <InformacionCliente/> }></Route>        
          <Route exact path="/CargaInformacionProducto" element={  <CargaInformacionProductos/> }></Route>        
        </Routes>
    </div>
  )
}

export default App
