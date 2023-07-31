import Header from "../../components/Header"
import RegisterForm from "../../components/RegisterForm"
import Footer from "../../components/Footer"
import { ToastContainer } from "react-toastify"

const Register = () => {
  return (
    <>
      <Header />
      <RegisterForm />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Register