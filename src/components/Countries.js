import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup } from "react-bootstrap";

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
      {result.map((x, i) => {
        return (
          <CardGroup>
            <Card bg="light" text="dark" key={i} style={{ width: "1rem" }}>
              <Card.Img key={i} variant="top" src={x.countryInfo.flag} />
              <Card.Body>
                <Card.Title>{x.country}</Card.Title>
                <Card.Text>Cases {x.cases}</Card.Text>
                <Card.Text>Deaths {x.deaths}</Card.Text>
                <Card.Text>Recovered {x.recovered}</Card.Text>
                <Card.Text>Today's Case {x.cases}</Card.Text>
                <Card.Text>Today's Deaths {x.todayDeaths}</Card.Text>
                <Card.Text>Critical {x.critical}</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        );
      })}
    </>
  );
};

export default Countries;
