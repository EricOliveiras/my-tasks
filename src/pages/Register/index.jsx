import { ToastContainer } from "react-toastify"

import RegisterForm from "../../components/RegisterForm"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Register = () => {
  return (
    <>
      <Header headerTitle={"My Tasks"}/>
      <RegisterForm />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Register