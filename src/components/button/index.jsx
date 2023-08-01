import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Button = ({ path, btnId, name, click }) => {
  return (
    <Link to={path}><button id={btnId} onClick={click} type="submit">{name}</button></Link>
  )
}

Button.propTypes = {
  btnId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  click: PropTypes.func,
}

export default Button