import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Register from "../pages/Register"
import Login from "../pages/Login"

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/registrar" element={<Register />}/>
          <Route exact path="/entrar" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter