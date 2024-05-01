import "./App.css";
import { LanguageProvider } from "./context/LanguageProvider";
import { ShipmentProvider } from "./context/ShipmentProvider";
import Layout from "./Layout";
function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <ShipmentProvider>
          <Layout />
        </ShipmentProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
