import styles from "../Form/Form.module.css";
import { AuthForm } from "../../context/ContextForm";
import { useNavigate } from "react-router-dom";

function Form() {
  const {
    nome,
    idade,
    telefone,
    setNome,
    setIdade,
    setTelefone,
    sendMessageToTelegram,
  } = AuthForm();

  const navigate = useNavigate();

  return (
    <form className={styles.form} onSubmit={sendMessageToTelegram}>
      <input
        type="text"
        placeholder="Su nombre"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type="number"
        placeholder="Su edad"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input
        type="number"
        placeholder="Su teléfono"
        value={telefone}
        onChange={({ target }) => setTelefone(target.value)}
      />
      <div className={styles.caixa}>
        <input type="checkbox" />
        <p>
          Acepto recibir información sobre eventos, promociones, invitaciones a
          conciertos y mucho más por correo electrónico a la dirección indicada
          arriba. Confirmo también que he leído, entiendo y aceptado la política
          de privacidad. Leer
        </p>
      </div>
      <button onClick={() => navigate("/Verificación")}>
        {"Continuar".toUpperCase()}
      </button>
    </form>
  );
}

export default Form;
