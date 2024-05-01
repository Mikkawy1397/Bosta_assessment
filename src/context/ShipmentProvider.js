import React, { useState } from "react";
import { ShipmentContext } from "./ShipmentContext";
export const ShipmentProvider = ({ children }) => {
  const [shipmentId, setShipmentId] = useState(67151313);

  return (
    <ShipmentContext.Provider value={{ shipmentId, setShipmentId }}>
      {children}
    </ShipmentContext.Provider>
  );
};
