import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Menu, Perfil } from './components'
import './index.css'
import { Login } from './components/login'
import { Routes, Route } from 'react-router-dom';  
import { ConsultaCliente, InformacionCliente } from './components/Coordinador'
import { ConsutlarPedido } from './components/Cliente'

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
        </Routes>
    </div>
  )
}

export default App
