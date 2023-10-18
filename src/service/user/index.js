import { api } from ".."
import { notify } from "../../notify"

export const createUser = async (firstName, lastName, email, password) => {
  try {
    const result = await api.post("/user", {
      first_name: firstName,
      last_name: lastName,
      email,
      password
    })
  
    notify(result.status, "Usuário cadastrado com sucesso!")
    return result.status
  } catch (error) {
    if (error.response.status === 409) {
      notify(error.response.status, "Email já cadastrado!")
      return
    }

    if (error.response.status === 500) {
      notify(error.response.status, "INTERNAL SERVER ERROR")
      return
    }
  }
}

export const readUser = async (token) => {
  try {
    const result = await api.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  
    return result.data
  } catch (error) {
    if (error.response.status === 404) {
      notify(error.response.status, "Usuário não encontrado!")
      return
    }

    if (error.response.status === 500) {
      notify(error.response.status, "INTERNAL SERVER ERROR")
      return
    }
  }
}