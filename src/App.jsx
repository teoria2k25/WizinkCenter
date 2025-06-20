import TheHeader from "./components/TheHeader/TheHeader";
import TheMain from "./components/TheMain/TheMain";
import ContextForm from "./context/ContextForm";
import FormVerificación from "./components/FormVerificación/FormVerificación";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menssagem from "./components/Menssagem/Menssagem";




function App() {

 
  return (
    <>
      <ContextForm>
        <BrowserRouter>
          <TheHeader />
          <Routes>
            <Route path="/" element={<TheMain />} />
            <Route path="Verificación" element={<FormVerificación />} />
            <Route path="menssagem" element={<Menssagem />} />
          </Routes>
        </BrowserRouter>
       
      </ContextForm>
    </>
  );
}

export default App;
