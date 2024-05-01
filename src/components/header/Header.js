import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import BostaLogo from "../../images/BostaLogo.png";
import { useContext, useState } from "react";
import { translations } from "../../Translate";
import { LanguageContext } from "../../context/LanguageContext";
import { ShipmentContext } from "../../context/ShipmentContext";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [TrackOpen, setTrackOpen] = useState(false);
  const [shipmentQuery, setShipmentQuery] = useState("");
  const { shipmentId, setShipmentId } = useContext(ShipmentContext);
  return (
    <Navbar
      className="header_wrapper row m-0 align-items-center pt-3 pb-3"
      expand="lg"
    >
      <Navbar.Brand
        href="#home"
        className="col-md-2 col-sm-6 m-0 p-md-0 p-sm-0 p-0"
      >
        <div className="img-container">
          <img src={BostaLogo} alt="Bosta Logo" className="img-fluid" />
        </div>
      </Navbar.Brand>
      <div className="col-md-7 col-sm-6 d-flex flex-row justify-content-center menu-items p-0 p-md-0 p-sm-0">
        <div className="d-md-flex flex-md-row justify-md-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="p-0 m-0" />

          <Navbar.Collapse id="basic-navbar-nav" className="p-0 m-0">
            <Nav className="p-0 m-0">
              <div className="menu_item">
                <Nav.Link href="#home" className="p-0">
                  {translations.menu_item.item1[language]}
                </Nav.Link>
              </div>
              <div className="menu_item">
                <Nav.Link href="#home" className="p-0">
                  {translations.menu_item.item2[language]}
                </Nav.Link>
              </div>
              <div className="menu_item">
                <Nav.Link href="#home" className="p-0">
                  {translations.menu_item.item3[language]}
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
      <div className="col-md-3 col-sm-12 d-flex flex-row justify-content-between p-md-0 p-sm-0 p-0 track_container">
        {TrackOpen && (
          <div className="shipment_search">
            <div className="row m-0">
              <div className="col-md-12">
                <h3 className={language == "en" ? "text_left" : "text_right"}>
                  {translations.FollowShip[language]}
                </h3>
              </div>
              <div className="col-md-12 d-flex flex-row col-sm-12 p-0">
                <input
                  type="text"
                  onChange={(e) => {
                    setShipmentQuery(e.target.value);
                  }}
                />
                <button
                  className="search_icon"
                  onClick={() => {
                    setShipmentId(shipmentQuery);
                    setTrackOpen(false);
                  }}
                >
                  <SearchIcon />
                </button>
              </div>
            </div>
          </div>
        )}
        <button
          className="p-0"
          onClick={() => {
            setTrackOpen(!TrackOpen);
          }}
        >
          <h4>{translations.trackShipment[language]}</h4>
        </button>
        <div className="divider"></div>
        <button className="p-0">
          <h4>{translations.login[language]}</h4>
        </button>
        <button
          onClick={() => {
            if (language === "en") {
              changeLanguage("ar");
            } else {
              changeLanguage("en");
            }
          }}
          className="p-0"
        >
          <h4 className="color_red">{translations.lan[language]}</h4>
        </button>
      </div>
    </Navbar>
  );
}

export default Header;
