import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Perfil } from './components'
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
        <Link to="/login"> Login </Link>
        <Link to="/"> Home </Link>
        <Routes>
          <Route exact path="/login" element={<Login/>}></Route>        
          <Route exact path="/" element={  <Perfil/>}></Route>        
        </Routes>
    </div>
  )
}

export default App
