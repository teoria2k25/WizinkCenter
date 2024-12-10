import TheHeader from "./components/TheHeader/TheHeader";
import TheMain from "./components/TheMain/TheMain";
import ContextForm from "./context/ContextForm";

function App() {
  return (
    <>
      <ContextForm>
        <TheHeader />
        <TheMain />
      </ContextForm>
    </>
  );
}

export default App;
