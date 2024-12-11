import TheHeader from "./components/TheHeader/TheHeader";
import TheMain from "./components/TheMain/TheMain";
import ContextForm from "./context/ContextForm";
import FormVerificación from "./components/FormVerificación/FormVerificación";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ContextForm>
        <BrowserRouter>
          <TheHeader />
          <Routes>
            <Route path="/" element={<TheMain />} />
            <Route path="Verificación" element={<FormVerificación />} />
          </Routes>
        </BrowserRouter>
      </ContextForm>
    </>
  );
}

export default App;
