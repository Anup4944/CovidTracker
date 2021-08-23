import React, { useEffect } from "react";
import { Table } from "react-bootstrap";

const Covid = () => {
  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://data.nsw.gov.au/data/dataset/0a52e6c1-bc0b-48af-8b45-d791a6d8e289/resource/f3a28eed-8c2a-437b-8ac1-2dab3cf760f9/download/covid-case-locations-20210823-1200.json"
      );
      const actualData = await res.json();
      console.log(actualData.data.monitor);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
        <h1> 🔴 LIVE </h1>
        <h2 className="mb-5">
          <span className="font-weight-bold">NSW </span>COVID-19 venues
        </h2>
      </div>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Venue</th>
              <th>Address</th>
              <th>Suburb</th>
              <th>Date</th>
              <th>Time</th>
              <th>Alert</th>
              <th>Lon</th>
              <th>Lat</th>
              <th>Health Advice</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default Covid;
