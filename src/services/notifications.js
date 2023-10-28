import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successfullNotification = title => {
  return toast.success(title, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const failedNotification = title => {
  return toast.error(title, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};
