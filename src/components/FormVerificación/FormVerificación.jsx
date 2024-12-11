import styles from "../../components/FormVerificación/FormVerificación.module.css";
import { AuthForm } from "../../context/ContextForm";
import { useNavigate } from "react-router-dom";

function FormVerificación() {
  const { values, handleInputChange, handleClear,codigoVerification } = AuthForm();
  const navigate = useNavigate();
  //   // Estado para armazenar os valores dos campos
  //   const [values, setValues] = useState(["", "", "", ""]);
  //   console.log(values.join(''));

  //   // Função para lidar com a entrada
  //   const handleInputChange = (index, event) => {
  //     const { value } = event.target;
  //     // Valida que apenas números são permitidos
  //     if (!/^\d*$/.test(value)) return;
  //     const newValues = [...values];
  //     newValues[index] = value.charAt(0); // Apenas o primeiro caractere
  //     setValues(newValues);
  //     // Move o foco automaticamente para o próximo campo
  //     if (value && index < values.length - 1) {
  //       document.getElementById(`input-${index + 1}`).focus();
  //     }
  //   };
  //   // Limpar os campos
  //   const handleClear = () => setValues(["", "", "", ""]);

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
