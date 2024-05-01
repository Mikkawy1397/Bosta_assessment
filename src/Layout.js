import Header from "./components/header/Header";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import TrackShipment from "./pages/TrackShipment/TrackShipment";
function Layout() {
  const { language } = useContext(LanguageContext);

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container">
        <Header />
      </div>
      <div className="hl"></div>
      <div className="container">
        {/* Routes will be added here */}
        <TrackShipment />
      </div>
    </div>
  );
}

export default Layout;
