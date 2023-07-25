import { Link, useLocation } from "react-router-dom"
import Button from '../button'

import './style.css'

const Header = () => {
  const location = useLocation()

  let buttonComponent;

  if (location.pathname === "/") {
    buttonComponent =               
    <>
      <Button path="/entrar" btnId="login-button" name="Entrar" />
      <Button path="/registrar" btnId="register-button" name="Registrar" />
    </>
  } else if (location.pathname === "/registrar" || location.pathname === "/entrar") {
    buttonComponent = <Button path="/" btnId="register-button" name="Voltar" />
  } else {
    buttonComponent = <Button path="/" btnId="register-button" name="Dashboard" />
  }

  return (
    <>
      <div className="header-container">
        <Link id="header-title" to={"/"}><h2>My Tasks</h2></Link>
        <div className="button-container">
          {buttonComponent}
        </div>
      </div>
    </>
  )
}

export default Header