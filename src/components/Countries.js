import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Countries.style.css";
import { Table, Form, Image } from "react-bootstrap";
import NumberFormat from "react-number-format";

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
        <Form.Group className="mt-3" controlId="formGroupSearch">
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
            <th>Case per One Million</th>
            <th>Death per One Million</th>
            <th>Population</th>
            <th>Continent</th>
          </tr>
        </thead>
        <tbody>
          {filterCountries.map((x, i) => {
            return (
              <>
                <tr>
                  <td>
                    <Image src={x.countryInfo.flag} alt="flags"></Image>
                  </td>
                  <td> {x.country}</td>
                  <td>
                    {" "}
                    <NumberFormat
                      value={x.cases}
                      displayType={"text"}
                      thousandSeparator={true}
                    >
                      {" "}
                      {x.cases}
                    </NumberFormat>
                  </td>
                  <td>
                    <NumberFormat
                      value={x.deaths}
                      displayType={"text"}
                      thousandSeparator={true}
                    >
                      {" "}
                      {x.deaths}
                    </NumberFormat>
                  </td>
                  <td>
                    <NumberFormat
                      value={x.recovered}
                      displayType={"text"}
                      thousandSeparator={true}
                    >
                      {" "}
                      {x.recovered}
                    </NumberFormat>
                  </td>
                  <td>
                    <NumberFormat
                      value={x.casesPerOneMillion}
                      displayType={"text"}
                      thousandSeparator={true}
                    >
                      {" "}
                      {x.casesPerOneMillion}
                    </NumberFormat>
                  </td>
                  <td>
                    <NumberFormat
                      value={x.deathsPerOneMillion}
                      displayType={"text"}
                      thousandSeparator={true}
                    >
                      {" "}
                      {x.deathsPerOneMillion}
                    </NumberFormat>
                  </td>
                  <td>
                    <NumberFormat
                      value={x.population}
                      displayType={"text"}
                      thousandSeparator={true}
                    >
                      {" "}
                      {x.population}
                    </NumberFormat>
                  </td>
                  <td>{x.continent}</td>
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
