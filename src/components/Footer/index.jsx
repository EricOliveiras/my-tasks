import { FiGithub, FiLinkedin } from 'react-icons/fi'

import './style.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <h4 id="footer-title">Desenvolvido por Eric Oliveira</h4>
      <div className="icon">
        <a 
          href="https://www.linkedin.com/in/eric-oliveira-588379204/" 
          target="_blank" rel="noreferrer"
        >
          <FiLinkedin />
        </a>
      </div>
      <div className="icon">
        <a 
          href="https://github.com/EricOliveiras" target="_blank" rel="noreferrer"
        >
          <FiGithub />
        </a>
      </div>
    </div>
  )
}

export default Footer