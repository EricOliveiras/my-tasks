import './style.css'

const HeaderHome = () => {
  return (
    <div className="header-container">
      <h2 id="header-title">My Tasks</h2>
      <div className="button-container">
        <button id="login-button" type="submit">Entrar</button>
        <button id="register-button"  type="submit">Registrar</button>
      </div>
    </div>
  )
}

export default HeaderHome