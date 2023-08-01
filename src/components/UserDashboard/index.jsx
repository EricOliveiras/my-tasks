import { useEffect, useState } from "react"

import { readUser } from "../../service/user"
import TaskCard from "../TaskCard"
import Header from "../Header"
import Button from "../button"

import "./style.css"

const UserDashboard = () => {
  const [user, setUser] = useState([])
  const [task, seTask] = useState()

  const handleFinishTask = (taskId) => {
    // Lógica para marcar a tarefa como finalizada
    console.log(`Tarefa ${taskId} finalizada.`);
  };

  const handleUpdateTask = (taskId) => {
    // Lógica para atualizar a tarefa
    console.log(`Atualizar tarefa ${taskId}.`);
  };

  const handleDeleteTask = (taskId) => {
    // Lógica para excluir a tarefa
    console.log(`Excluir tarefa ${taskId}.`);
  };
  
  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token")
      const response = await readUser(token)
      setUser(response.data)
      seTask(response.data.Task)
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
          <Button path="/create-task" btnId="new-task-button" name="Nova Tarefa"/>
        </div>
        <div className="task-container">
          <h3>Pendentes:</h3>
          <div className="task-list">
            {task && (task.map((pending) => (
              !pending.finished && (
                <TaskCard
                  key={pending.id}
                  title={pending.title}
                  description={pending.description}
                  finished={pending.finished}
                  onFinish={() => handleFinishTask(pending.id)}
                  onUpdate={() => handleUpdateTask(pending.id)}
                  onDelete={() => handleDeleteTask(pending.id)}
                />
              )
            )))}
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
    </>
  )
}

export default UserDashboard