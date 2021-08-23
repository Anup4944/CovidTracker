import React, { useEffect } from "react";

const Covid = () => {
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1> 🔴 LIVE</h1>
      <h2>Covid 19 Dashboard for NSW</h2>
    </>
  );
};

export default Covid;
