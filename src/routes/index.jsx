import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from '../pages/Home'
import Register from "../pages/Register"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import PrivateRoute from "../components/PrivateRoute"
import ProfilePage from "../pages/ProfilePage"

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/registrar" element={<Register />}/>
          <Route exact path="/entrar" element={<Login />}/>
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }/>
          <Route path="/perfil" element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter