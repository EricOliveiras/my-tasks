import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ path, btnId, name }) => {
  return (
    <Link to={path}><button id={btnId} type="submit">{name}</button></Link>
  )
}

Button.propTypes = {
  btnId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default Button