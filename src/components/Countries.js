import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Countries.style.css";

const Countries = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v3/covid-19/countries")
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <table>
        <tr>
          <th>Country</th>
          <th>Flag</th>
          <th>Cases</th>
          <th>Deaths</th>
          <th>Recovered</th>
          <th>Critical</th>
        </tr>
        {result.map((x, i) => {
          return (
            <tr>
              <td>{x.country}</td>
              <td>
                <img src={x.countryInfo.flag} alt="flags"></img>
              </td>
              <td>{x.cases}</td>
              <td> {x.deaths}</td>
              <td>{x.recovered}</td>
              <td>{x.critical}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Countries;
