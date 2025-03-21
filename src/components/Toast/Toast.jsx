import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import styles from "../Menssagem/menssagem.module.css";


const Toast = () => {
  return (
   
      <ToastContainer
        className={styles.custom_toast}
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  
  );
};

export default Toast;
