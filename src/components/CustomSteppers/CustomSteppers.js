import React, { useState, useEffect } from "react";
import "./CustomSteppers.css"; // Make sure to create this CSS file
import CheckIcon from "@mui/icons-material/Check";
import { t } from "i18next";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AllInboxIcon from "@mui/icons-material/AllInbox";
export default function CustomSteppers({ shipmentData }) {
  const steps = [
    "Shipment Created",
    "Shipment Received from Supplies",
    "Out for Delivery",
    "Delivered",
  ];
  useEffect(() => {
    switch (shipmentData.CurrentStatus.state) {
      case "DELIVERED":
        setCurrentStep(4);
        break;
      case "CANCELLED":
        setCurrentStep(3);
        break;

      case "DELIVERED_TO_SENDER":
        setCurrentStep(3);
        break;
    }
  }, [shipmentData]);

  const [currentStep, setCurrentStep] = useState(3);

  return (
    <div className="stepper-container">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="circle_wrapper">
            <div
              key={index}
              className={`step_circle  ${
                index < currentStep
                  ? `active ${
                      shipmentData.CurrentStatus.state == "DELIVERED"
                        ? "bg-green"
                        : shipmentData.CurrentStatus.state == "CANCELLED"
                        ? "bg-red"
                        : "bg-orange"
                    }`
                  : ""
              } ${index > 1 ? "big_size" : "mt-60"}  ${
                index < currentStep - 1
                  ? `active ${
                      shipmentData.CurrentStatus.state == "DELIVERED"
                        ? "bg-green"
                        : shipmentData.CurrentStatus.state == "CANCELLED"
                        ? "bg-red"
                        : "bg-orange"
                    }`
                  : ""
              }`}
            >
              {index < 2 ? (
                <CheckIcon fontSize="small" color="white" />
              ) : index == 2 ? (
                <LocalShippingIcon fontSize="small" color="white" />
              ) : (
                <AllInboxIcon fontSize="small" color="white" />
              )}
            </div>
            <div className="step_text_wrapper">
              <h4 className="step_text d-none d-sm-block hide_on_mobile">
                {t(step)}
              </h4>

              {index == 2 &&
                shipmentData.CurrentStatus.state !== "DELIVERED" && (
                  <h4
                    className={`step_status_text d-none d-sm-block hide_on_mobile ${
                      shipmentData.CurrentStatus.state == "CANCELLED"
                        ? "color_red"
                        : "color_orange"
                    }`}
                  >
                    {shipmentData.CurrentStatus.state == "CANCELLED"
                      ? t("Cancelled from seller")
                      : t("Client not responding")}
                  </h4>
                )}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`line ${
                index < currentStep - 1
                  ? `active ${
                      shipmentData.CurrentStatus.state == "DELIVERED"
                        ? "bg-green"
                        : shipmentData.CurrentStatus.state == "CANCELLED"
                        ? "bg-red"
                        : "bg-orange"
                    }`
                  : ""
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
