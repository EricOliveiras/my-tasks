import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"

import { readUser } from "../../service/user"
import { createTask, deleteTask, finishTask, updateteTask } from "../../service/task"
import TaskCard from "../TaskCard"
import Header from "../Header"
import Modal from "../Modal"
import TaskForm from "../TaskForm"

import "./style.css"

const UserDashboard = () => {
  const [user, setUser] = useState([])
  const [task, setTask] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isUpdateOpen, setIsUpdateOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState({})

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleOpenUpdateModal = (task) => {
    setSelectedTask({ id: task.id, title: task.title, description: task.description })
    setIsUpdateOpen(true)
  };

  const handleCloseUpdateModal = () => {
    setSelectedTask(null)
    setIsUpdateOpen(false)
  };
  
  const handleAddTask = async ({ title, description }) => {
    const token = localStorage.getItem("token")
    const response = await createTask(token, title, description)

    if (!response) return
    
    setTask([...task, response.data.data])

    handleCloseModal()
  }

  const handleFinishTask = async (task_id) => {
    const confirmed = window.confirm("Tem certeza de que deseja finalizar esta tarefa?")
    if (!confirmed) return

    const token = localStorage.getItem("token")

    const response = await finishTask(token, task_id)

    if (!response) return

    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === task_id ? { ...task, finished: true } : task
      )
    )
  }

  const handleUpdateTask = async ({title, description}) => {
    const token = localStorage.getItem("token")

    const { id } = selectedTask

    const response = await updateteTask(token, id, title, description)

    if (!response) return

    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title, description } : task
      )
    )

    handleCloseUpdateModal()
  }

  const handleDeleteTask = async (task_id) => {
    const confirmed = window.confirm("Tem certeza de que deseja excluir esta tarefa?")
    if (!confirmed) return

    const token = localStorage.getItem("token")

    const response = await deleteTask(token, task_id)

    if (!response) return

    const updatedTasks = task.filter((task) => task.id !== task_id)
    setTask(updatedTasks)
  }
  
  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token")
      const response = await readUser(token)
      setUser(response.data)
      setTask(response.data.Task)
    }
    getUser()
  }, [])
  
  return (
    <>
      <Header headerTitle={`Olá, ${user.first_name}.`}/>
      <hr className="divisor"/>
      <div className="user-tasks-container">
        <div className="task-info">
          <h3>Suas tarefas:</h3>
          <button id="new-task-button" type="submit" onClick={handleOpenModal}>Nova Tarefa</button>
          <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <TaskForm onSubmit={handleAddTask} typeForm={"Criar Nova Tarefa"}/>
          </Modal>
          <Modal isOpen={isUpdateOpen} onClose={handleCloseUpdateModal}>
            {selectedTask && (
              <TaskForm onSubmit={handleUpdateTask} typeForm={"Atualizar Tarefa"} initialValues={selectedTask}/>
            )}
          </Modal>
        </div>
        <div className="task-container">
          <h3>Pendentes:</h3>
          <div className="task-list">
            {task && (task.map((pending) => (
              !pending.finished && (
              <>
                <TaskCard
                  key={pending.id}
                  title={pending.title}
                  description={pending.description}
                  finished={pending.finished}
                  onFinish={() => handleFinishTask(pending.id)}
                  onUpdate={() => handleOpenUpdateModal(pending)}
                  onDelete={() => handleDeleteTask(pending.id)}
                />
              </>
              ))
            ))}
          </div>
          <div className="task-container">
            <h3>Finalizadas:</h3>
            <div className="task-list">
              {task && (task.map((finish) => (
                finish.finished && (
                  <TaskCard
                    key={finish.id}
                    title={finish.title}
                    description={finish.description}
                    finished={finish.finished}
                    onFinish={() => handleFinishTask(finish.id)}
                    onUpdate={() => handleUpdateTask(finish.id)}
                    onDelete={() => handleDeleteTask(finish.id)}
                  />
                )
              )))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default UserDashboard