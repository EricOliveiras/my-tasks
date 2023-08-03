import { Link, useLocation } from "react-router-dom"
import PropTypes from "prop-types"

import Button from "../button"

import "./style.css"

// eslint-disable-next-line react/prop-types
const Header = ({ headerTitle }) => {
  const location = useLocation()

  const clearToken = () => {
    localStorage.removeItem("token")
  }

  let buttonComponent
  let path = "/"

  if (location.pathname === "/") {
    buttonComponent =               
    <>
      <Button path="/entrar" btnId="login-button" name="Entrar" />
      <Button path="/registrar" btnId="register-button" name="Registrar" />
    </>
  } else if (location.pathname === "/registrar" || location.pathname === "/entrar") {
    buttonComponent = <Button path="/" btnId="register-button" name="Voltar" />
  } else if (location.pathname === "/perfil") {
    buttonComponent = <Button path="/dashboard" btnId="register-button" name="Voltar" />
  } else {
    buttonComponent = 
    <>
      <Button path="/perfil" btnId="register-button" name="Perfil" />
      <Button path="/" btnId="register-button" name="Sair" click={clearToken}/>
    </>
  }

  if (location.pathname === "/dashboard") {
    path = "/dashboard"
  } 

  return (
    <>
      <div className="header-container">
        <Link id="header-title" to={path}><h2>{headerTitle}</h2></Link>
        <div className="button-container">
          {buttonComponent}
        </div>
      </div>
    </>
  )
}

Header.PropTypes = {
  headerTitle: PropTypes.string.isRequired,
}

export default Header