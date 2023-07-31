import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { loginUser } from '../../validators/userValidator'
import { login } from '../../service/auth'

import './style.css'

const LoginForm = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginUser)
  })

  const onSubmit = async ({ email, password }) => {
    const result = await login(email, password)

    if (!result) return

    localStorage.setItem("token", result.data.token)

    navigate("/dashboard")
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-field-container">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm
