import * as yup from 'yup'

export const creeateUserValidator = yup.object({
  first_name: yup.string().required('Campo nome requerido').min(4, 'O nome deve conter no minimo 4 caracterees'),
  last_name: yup.string().required('Campo sobrenome requerido').min(4, 'O sobrnome deve conter no minimo 4 caracterees'),
  email: yup.string().required('Campo email requerido').email('Formato do email inválido'),
  password: yup.string().required('Campo senha requerido').min(4, 'A senha deve conter no minimo 4 caracterees'),
  confirmPassword: yup.string().required('Campo confirmação de senha requerido').oneOf([yup.ref('password')], 'Senha não combina')
}).required();

export const loginUser = yup.object({
  email: yup.string().required('Campo email requerido'),
  password: yup.string().required('Campo senha requerido')
}).required();