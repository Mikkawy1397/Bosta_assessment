import React, { useEffect, useState } from "react";
import "./TrackShipment.css";
import ShipmentProgress from "../../components/shipmentProgress/ShipmentProgress";
import { useContext } from "react";
import { ShipmentContext } from "../../context/ShipmentContext";
import ShipmentTrackTable from "../../components/ShipmentTrackTable/ShipmentTrackTable";
import ShipmentAddress from "../../components/ShipmentAddress/ShipmentAddress";
function TrackShipment() {
  const { shipmentId } = useContext(ShipmentContext);
  const [shipmentData, setShipmentData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://tracking.bosta.co/shipments/track/${shipmentId}`
      );
      const data = await response.json();
      setShipmentData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [shipmentId]);

  return (
    <div className="trackShipment_wrapper">
      {shipmentData && !shipmentData.error && (
        <div className="row m-0">
          <div className="col-md-12 col-sm-12 p-0">
            <ShipmentProgress shipmentData={shipmentData} />
          </div>
          <div className="col-md-8 col-sm-12">
            <ShipmentTrackTable shipmentData={shipmentData} />
          </div>
          <div className="col-md-4 col-sm-12">
            <ShipmentAddress shipmentData={shipmentData} />
          </div>
        </div>
      )}
      {shipmentData?.error && <h1>{shipmentData?.error}</h1>}
    </div>
  );
}

export default TrackShipment;
