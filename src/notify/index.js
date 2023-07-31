import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config = {
  position: "top-center",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}

export const notify = (code, message) => {
  if (code >= 200 && code <= 300) {
    toast.success(message, config)
  } else {
    toast.error(message, config)
  }
}