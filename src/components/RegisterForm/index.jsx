import { useState } from 'react'
import InputField from '../InputField'

import './style.css'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit} method="POST">
        <InputField
          label="Nome"
          name="first_name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <InputField
          label="Sobrenome"
          name="last_name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <InputField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />
        <InputField
          label="Senha"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          required
        />
        <InputField
          label="Confirmar Senha"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}

export default RegisterForm
