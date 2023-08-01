import PropTypes from "prop-types"

import "./style.css"

const TaskCard = ({ title, description, finished, onFinish, onUpdate, onDelete }) => {
  return (
    <div className="task-card">
      <div className="task-header">
        <h3 className="task-title">{title}</h3>
        <span className={`task-status ${finished ? "finished" : "pending"}`}>
          {finished ? "Finalizado" : "Pendente"}
        </span>
      </div>
      <p className="task-description">{description}</p>
      {!finished ? (
        <div className="task-buttons">
          <button className="task-button" onClick={onFinish}>
            Finalizar
          </button>
          <button className="task-button" onClick={onUpdate}>
            Atualizar
          </button>
          <button className="task-button" onClick={onDelete}>
            Excluir
          </button>
        </div>
      ): (
        <div className="task-buttons">
          <button className="task-button" onClick={onDelete}>
            Excluir
          </button>
        </div>
      )}
    </div>
  )
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  finished: PropTypes.bool.isRequired,
  onFinish: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default TaskCard