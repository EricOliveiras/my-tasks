import { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { readUser } from "../../service/user"

import "./style.css"

const Profile = () => {
  const [user, setUser] = useState([])

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    const formattedDate = new Date(dateString).toLocaleString("pt-BR", options)
    return formattedDate
  }

  const handlerGetUser = async () => {
    const token = localStorage.getItem("token")
    const response = await readUser(token)

    if (!response) return

    setUser(response.data)
  }

  const handlerUpdateProfile = async (userId) => {
    console.log(`Update id ${userId}`)
  }

  const handlerDeleteProfile = async (userId) => {
    console.log(`Delete id ${userId}`)
  }

  useEffect(() => {
    handlerGetUser()
  }, [])  

  return (
    <div className="profile-container">
      <div className="profile-container-info">
        <h2 className="profile-title">{user.first_name} {user.last_name}</h2>
        <p className="profile-info">Email: {user.email}</p>
        <p className="profile-info">Conta criada em: {formatDate(user.created_at)}</p>
        <div className="profile-buttons-container">
          <div className="profile-button" onClick={() => handlerUpdateProfile(user.id)}>Atualizar perfil</div>
          <div className="profile-button" onClick={() => handlerDeleteProfile(user.id)}>Deletar perfil</div>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updateAcc: PropTypes.func.isRequired,
  deleteAcc: PropTypes.func.isRequired,
}

export default Profile