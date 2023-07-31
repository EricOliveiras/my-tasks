import { Navigate } from "react-router-dom"
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const isAuth = () => {
    return localStorage.getItem("token") ? true : false
  }

  return isAuth() ? children : <Navigate to="/"/>
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrivateRoute
