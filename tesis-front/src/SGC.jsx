import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Menu, Perfil } from './components'
import './App.css'
import { Login } from './components/login'
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
} from 'react-router-dom';  

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>   
          <Route exact path="/" element={  <Login/> }></Route>        
          <Route exact path="/menu" element={  <Menu/> }></Route>        
        </Routes>
    </div>
  )
}

export default App
