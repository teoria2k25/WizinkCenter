import React from "react";
import styles from "../Menssagem/menssagem.module.css";
import Toast from "../Toast/Toast";
import { toast } from "react-toastify";

const Menssagem = () => {
  const phoneNumber = "34602146567";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  React.useEffect(() => {
    toast.success(
      "Para validar tu registro, envía un mensaje a nuestro WhatsApp con la palabra “validar” y espera a que un asistente te responda."
    );

    setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 4000);
  }, []);

  return (
    <section className={styles.section}>
      <div style={{ padding: "0px 20px" }}>
        <Toast />
      </div>
    </section>
  );
};

export default Menssagem;
