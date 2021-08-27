import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Countries.style.css";
import { Table, Form } from "react-bootstrap";

const Countries = () => {
  const [result, setResult] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");

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

  const filterCountries = result.filter((item) => {
    return searchCountries !== ""
      ? item.country.includes(searchCountries)
      : item;
  });

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupSearch">
          <Form.Control
            type="text"
            placeholder="Search Country here"
            onChange={(e) => setSearchCountries(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Countries</th>
            <th>Cases</th>
            <th>Death</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {filterCountries.map((x, i) => {
            return (
              <>
                <tr>
                  <td>
                    <img src={x.countryInfo.flag} alt="flags"></img>
                  </td>
                  <td>{x.country}</td>
                  <td>{x.cases}</td>
                  <td>{x.deaths}</td>
                  <td>{x.recovered}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Countries;
