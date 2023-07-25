import { Link } from 'react-router-dom'
import Button from '../button'

import './style.css'

const HeaderHome = () => {
  return (
    <div className="header-container">
      <Link id="header-title" to={"/"}><h2>My Tasks</h2></Link>
      <div className="button-container">
        <Button path="/entrar" btnId="login-button" name="Entrar"/>
        <Button path="/registrar" btnId="register-button" name="Registrar"/>
      </div>
    </div>
  )
}

export default HeaderHome