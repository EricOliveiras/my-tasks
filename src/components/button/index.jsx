import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
  
Button.propTypes = {
  btnId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

const Button = ({ path, btnId, name }) => {
  return (
    <Link to={path}><button id={btnId} type="submit">{name}</button></Link>
  )
}


export default Button