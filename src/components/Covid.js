import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Covid.style.css";

// import { numberWithCommas } from "../utils/formatter";

const Covid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v3/covid-19/all")

      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dates = new Date(parseInt(data.updated));
  const latest = dates.toString();

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
            <Card.Text>{data.cases}</Card.Text>
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
    </>
  );
};

export default Covid;
