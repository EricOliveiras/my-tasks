import { ToastContainer } from "react-toastify"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import LoginForm from "../../components/LoginForm"


const Login = () => {
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Login