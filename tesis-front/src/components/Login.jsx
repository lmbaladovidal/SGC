import { Menu } from "./Menu"
import logo from "../assets/logo-guma.svg"


export const Login = () => {
  return (
    <div className="principal">
        <img src={logo} alt="" className="logo"/>
        <form action="/menu">
          <div>
            <h5>Usuario</h5>
            <input type="text" className="text"/>
          </div>
          <div>
            <h5>Contraseña</h5>
            <input type="password" name="" id="" className="text"/>            
          </div>
          <input type="submit" value="Ingresar" className="submit"/>
        </form>
    </div>
  )
}
