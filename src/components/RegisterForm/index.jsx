import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { createUser } from '../../service/user'
import { creeateUserValidator } from '../../validators/userValidator'

import './style.css'

const RegisterForm = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(creeateUserValidator)
  })
  const onSubmit = async ({ first_name, last_name, email, password }) => {
    const result = await createUser(
      first_name,
      last_name,
      email,
      password
    )

    if (!result) return

    reset()

    setTimeout(() => {
      navigate("/")
    }, 3000)
  }

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field-container">
          <label htmlFor="first_name">Nome:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            {...register("first_name")}
            className="input-field"
          />
          <p className='errors'>{errors.first_name?.message}</p>
        </div>
        <div className="input-field-container">
          <label htmlFor="last_name">Sobrenome:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            {...register("last_name")}
            className="input-field"
          />
          <p className='errors'>{errors.last_name?.message}</p>
        </div>
        <div className="input-field-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email")}
            className="input-field"
          />
          <p className='errors'>{errors.email?.message}</p>
        </div>
        <div className="input-field-container">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password")}
            className="input-field"
          />
          <p className='errors'>{errors.password?.message}</p>
        </div>
        <div className="input-field-container">
          <label htmlFor="confirmPassword">Confirmar senha:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            {...register("confirmPassword")}
            className="input-field"
          />
          <p className='errors'>{errors.confirmPassword?.message}</p>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}

export default RegisterForm
