import styles from "../../components/FormVerificación/FormVerificación.module.css";
import { AuthForm } from "../../context/ContextForm";
import { useNavigate } from "react-router-dom";

function FormVerificación() {
  const { values, handleInputChange, handleClear,codigoVerification } = AuthForm();
  const navigate = useNavigate();
  

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={codigoVerification}>
        <div className={styles.info}>
          <span className={styles.title}>Verificación en dos pasos</span>
          <p className={styles.description}>
          Introduzca el código de su participación en el sorteo, aparecerá en la pantalla de su WhatsApp.
          </p>
        </div>

        <div className={styles.inputfields}>
          {values.map((value, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="tel"
              maxLength="1"
              value={value}
              onChange={(event) => handleInputChange(index, event)}
            />
          ))}
        </div>

        <div className={styles.actionbtns}>
          <button type="button" className={styles.clear} onClick={handleClear}>
            Borrar
          </button>
          <button
            type="submit"
            className={styles.verify}
            onClick={() => {
                navigate("/Verificación")
            }}
          >
            Verificar
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormVerificación;
