import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types"

import { createTaskValidator } from "../../validators/taskValidator";

import "./style.css"

const TaskForm = ({ onSubmit, initialValues, typeForm }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(createTaskValidator),
    defaultValues: initialValues
  })

  const handleFormSubmit = (data) => {
    onSubmit(data)
    reset()
  }

  return (
    <form className="task-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          {...register('title', { required: true })}
        />
        <p className='errors'>{errors.title?.message}</p>
      </div>
      <div>
        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          {...register('description', { required: true })}
        />
        <p className='errors'>{errors.description?.message}</p>
      </div>
      <button type="submit">{typeForm}</button>
    </form>
  )
}

TaskForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  typeForm: PropTypes.string,
}

export default TaskForm