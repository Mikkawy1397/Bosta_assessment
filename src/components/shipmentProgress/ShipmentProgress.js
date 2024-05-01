import React from "react";
import "./ShipmentProgress.css";
import { useContext, useEffect } from "react";
import { translations } from "../../Translate";
import { LanguageContext } from "../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import "../../../src/i18n/i18n";
import CustomSteppers from "../CustomSteppers/CustomSteppers";
function ShipmentProgress({ shipmentData }) {
  const { language } = useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const tdate = new Date(shipmentData.CurrentStatus.timestamp);
  const toptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  var langConfig;
  if (language === "ar") {
    langConfig = "ar-EG";
  } else {
    langConfig = "en-US";
  }
  const format_timeStamp = tdate.toLocaleString(langConfig, toptions);

  const pdate = new Date(shipmentData.PromisedDate);
  const poptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const format_promisedDate = pdate.toLocaleString(langConfig, poptions);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <>
      <div className="shipmentProgress_wrapper">
        <div className="row m-0 ">
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-start">
              <div className="progress_title">
                {translations.progress.titles.ShipmentNo[language] +
                  " " +
                  shipmentData.TrackingNumber}
              </div>
              <div
                className={
                  shipmentData.CurrentStatus.state == "CANCELLED"
                    ? "color_red progress_status"
                    : shipmentData.CurrentStatus.state == "DELIVERED"
                    ? "color_green progress_status"
                    : "color_orange progress_status"
                }
              >
                {t(shipmentData.CurrentStatus.state)}
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-start">
              <div className="progress_title">
                {translations.progress.titles.lastUpdate[language]}
              </div>
              <div className="progress_status">{format_timeStamp}</div>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-start">
              <div className="progress_title">
                {translations.progress.titles.SupplierName[language]}
              </div>
              <div className="progress_status">{shipmentData.provider}</div>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-start">
              <div className="progress_title">
                {translations.progress.titles.deliveryDate[language]}
              </div>
              <div className="progress_status">{format_promisedDate}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="shipmentProgress_wrapper border_top mb-4">
        <div className="row m-0 pb-4">
          <CustomSteppers shipmentData={shipmentData} />
        </div>
      </div>
    </>
  );
}

export default ShipmentProgress;
