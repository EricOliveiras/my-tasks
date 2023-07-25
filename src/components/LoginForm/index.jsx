import { useState } from 'react';

import InputField from '../InputField';

import './style.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
