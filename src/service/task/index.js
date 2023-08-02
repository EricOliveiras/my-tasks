import { api } from ".."
import { notify } from "../../notify"

export const createTask = async (token, title, description) => {
  try {
    const response = await api.post("/task", {
      title,
      description
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    notify(response.status, "Tarefa criada com sucesso!")
    return response
  } catch (error) {
    if (error.response.status) {
      notify(error.response.status, "Algo deu errado!")
      return
    }
  }
}

export const deleteTask = async (token, id) => {
  try {
    const response = await api.delete("/task", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        id
      }
    })

    notify(response.status, "Tarefa deletada com sucesso!")
    return response
  } catch (error) {
    if (error.response.status) {
      console.log(error.response)
      notify(error.response.status, "Algo deu errado!")
      return
    }
  }
}

export const updateteTask = async (token, id, title, description) => {
  try {
    const response = await api.put("/task", {
      id,
      title,
      description
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })

    notify(response.status, "Tarefa atualizada com sucesso!")
    return response
  } catch (error) {
    if (error.response.status) {
      console.log(error.response)
      notify(error.response.status, "Algo deu errado!")
      return
    }
  }
}

export const finishTask = async (token, id) => {
  try {
    const response = await api.put("/task", {
      id,
      finished: true
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })

    notify(response.status, "Tarefa finalizada com sucesso!")
    return response
  } catch (error) {
    if (error.response.status) {
      console.log(error.response)
      notify(error.response.status, "Algo deu errado!")
      return
    }
  }
}