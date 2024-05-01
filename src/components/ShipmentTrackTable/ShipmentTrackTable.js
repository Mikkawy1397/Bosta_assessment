import React from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import "./ShipmentTrackTable.css";
import { LanguageContext } from "../../context/LanguageContext";
function ShipmentTrackTable({ shipmentData }) {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();
  return (
    <div className="shipmentTrackTable_wrapper">
      <div className={language == "en" ? "text_left" : "text_right"}>
        <h3>{t("Shipment Details")}</h3>
      </div>
      <table>
        <tbody>
          {language == "en" && (
            <tr className="table_header">
              <th className="text_left">Branch</th>
              <th className="text_center">Date</th>
              <th className="text_center">Time</th>
              <th className="text_left w-30">Details</th>
            </tr>
          )}
          {language == "ar" && (
            <tr className="table_header">
              <th className="text_right">الفرع</th>
              <th className="text_center">التاريخ</th>
              <th className="text_center">الوقت</th>
              <th className="text_right w-30">تفاصيل</th>
            </tr>
          )}
          {Array.from({ length: 4 }).map((_, index) => (
            <tr>
              <td className={language == "en" ? "text_left" : "text_right"}>
                {t("Nasr city")}
              </td>
              <td className="text_center">05/04/2020</td>
              <td className="text_center" dir="ltr">
                12:30 pm
              </td>
              <td className={language == "en" ? "text_left" : "text_right"}>
                <div className="d-flex flex-column align-items-center">
                  <div>
                    {index == 0
                      ? t("Shipment Created")
                      : index == 1
                      ? t("Shipment Received from Supplies")
                      : index == 2
                      ? t("Out for Delivery")
                      : shipmentData.CurrentStatus.state == "DELIVERED"
                      ? t("Delivered")
                      : t("DELIVERED_TO_SENDER")}
                  </div>
                  {index == 3 &&
                    shipmentData.CurrentStatus.state !== "DELIVERED" && (
                      <div
                        className={
                          shipmentData.CurrentStatus.state == "CANCELLED"
                            ? "color_red"
                            : "color_orange"
                        }
                      >
                        {shipmentData.CurrentStatus.state == "CANCELLED"
                          ? t("Cancelled from seller")
                          : t("Client not responding")}
                      </div>
                    )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShipmentTrackTable;
