import { api } from ".."
import { notify } from "../../notify"

export const login = async (email, password) => {
  try {
    const result = await api.post("/auth/login", {
      email,
      password
    })

    return result
  } catch (error) {
    if (error.response.status !== 200) {
      notify(error.response.status, "Email ou senha incorretos!")
      return
    }

    if (error.response.status === 500) {
      notify(error.response.status, "INTERNAL SERVER ERROR")
      return
    }
  }
}