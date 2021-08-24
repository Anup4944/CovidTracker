import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./Covid.style.css";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://data.nsw.gov.au/data/dataset/0a52e6c1-bc0b-48af-8b45-d791a6d8e289/resource/f3a28eed-8c2a-437b-8ac1-2dab3cf760f9/download/covid-case-locations-20210823-1200.json"
      );
      const actualData = await res.json();
      // console.log(actualData.data.monitor[0]);
      setData(actualData.data.monitor);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1> 🔴 LIVE </h1>
      <h2>Covid 19 Venues across NSW </h2>
      {data.map((currEle) => {
        return (
          <div className="container">
            {" "}
            Venue : {currEle.Venue} Address: {currEle.Address} Suburb :{" "}
            {currEle.Suburb} Date : {currEle.Date} Time : {currEle.Time} Alert :{" "}
            {currEle.Alert} Lon : {currEle.Lon} Lat : {currEle.Lat} HealthAdvice
            : {currEle.HealthAdvice} transmissionvenues :{" "}
            {currEle.transmissionvenues}
          </div>
        );
      })}
    </>
  );
};

export default Covid;
