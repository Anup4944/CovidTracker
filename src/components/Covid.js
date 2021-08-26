import React, { useEffect, useState } from "react";
// import { Card, CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

// import { numberWithCommas } from "../utils/formatter";

const Covid = () => {
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
        axios.get("https://corona.lmao.ninja/v3/covid-19/countries"),
      ])
      .then((responseArr) => {
        setData(responseArr[0].data);
        setResult(responseArr[1].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dates = new Date(parseInt(data.updated));
  const latest = dates.toString();

  const country = result.map((currEle, i) => {
    return (
      <Card bg="light" text="dark" className="text-center" key={i}>
        <Card.Img key={i} variant="top" src={currEle.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{currEle.country}</Card.Title>
          <Card.Text>Cases {currEle.cases}</Card.Text>
          <Card.Text>Deaths {currEle.deaths}</Card.Text>
          <Card.Text>Recovered {currEle.recovered}</Card.Text>
          <Card.Text>Today's Case {currEle.cases}</Card.Text>
          <Card.Text>Today's Deaths {currEle.todayDeaths}</Card.Text>
          <Card.Text>Critical {currEle.critical}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <h1> 🔴 LIVE </h1>
      <h2>Covid 19 Cases Across the World</h2>

      <CardGroup>
        <Card
          className="text-center"
          bg="primary"
          text="dark"
          style={{ margin: "10px", fontSize: "1.5rem" }}
        >
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <Card.Text>{data.todayCases}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text">Last updated {latest}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="danger"
          text="dark"
          style={{ margin: "10px", fontSize: "1.5rem" }}
        >
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>{data.deaths}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text">Last updated {latest}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="success"
          text="dark"
          style={{ margin: "10px", fontSize: "1.5rem" }}
        >
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>{data.recovered}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text">Last updated {latest}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <Card>{country}</Card>
    </>
  );
};

export default Covid;
