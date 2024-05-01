import "./ShipmentAddress.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import BostaLogo from "../../images/BostaLogo.png";
function ShipmentAddress({ shipmentData }) {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();
  return (
    <div className="shipmentAddress_wrapper">
      <div className={language == "en" ? "text_left" : "text_right"}>
        <h3>{t("Shipment Address")}</h3>
      </div>
      <div className="shipmentAddress_card">
        <h3 className={language == "en" ? "text_left" : "text_right"}>
          امبابه شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 32
        </h3>
      </div>
      <div className="complain_card">
        <div className="row m-0 align-items-center">
          <div className="col-md-4 col-sm-12">
            <img src={BostaLogo} alt="Bosta Logo" className="img-fluid" />
          </div>
          <div className="col-md-8 col-sm-12">
            <h3>{t("Do you Have any problems with the shipment")}</h3>
            <button className="complainBtn">{t("Complaint")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipmentAddress;
