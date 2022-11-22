import { Menu } from "./Menu"
import logo from "../assets/logo-guma.svg"
import './Login.css'


export const Login = () => {
  return (
    <div className="contenedor-login">
        <img src={logo} alt="" className="logo"/>
        <form action="/menu" className="form-login">
          <div>
            <h5 className="login-title">Usuario</h5>
            <input type="text" className="text"/>
          </div>
          <div>
            <h5 className="login-title">Contraseña</h5>
            <input type="password" name="" id="" className="text"/>            
          </div>
          <input type="submit" value="Ingresar" className="submit"/>
        </form>
    </div>
  )
}
