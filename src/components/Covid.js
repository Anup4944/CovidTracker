import React, { useEffect, useState } from "react";
import { Card, CardGroup, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Covid.style.css";
import "animate.css";
import NumberFormat from "react-number-format";

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
      <h1 className="animate__animated animate__bounce animate__infinite	infinite">
        {" "}
        <Badge bg="dark"> 🔴 LIVE</Badge>{" "}
      </h1>
      <h2>
        {" "}
        <Badge bg="info"> Covid 19 Cases Across the World</Badge>
      </h2>

      <CardGroup>
        <Card
          className="text-center"
          bg="primary"
          text="dark"
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
        >
          <Card.Body>
            <Card.Title>
              <h1>
                {" "}
                <Badge bg="secondary">Cases</Badge>
              </h1>{" "}
            </Card.Title>
            <Card.Text>
              <NumberFormat
                value={data.cases}
                displayType={"text"}
                thousandSeparator={true}
              >
                {data.cases}
              </NumberFormat>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text" style={{ fontSize: "1rem" }}>
              Last updated {new Date(latest).toDateString()}
            </small>
          </Card.Footer>
        </Card>
        <Card
          bg="danger"
          text="dark"
          style={{ margin: "10px", fontSize: "1.5rem", cursor: "pointer" }}
        >
          <Card.Body>
            <Card.Title>
              <h1>
                {" "}
                <Badge bg="warning">Deaths</Badge>
              </h1>{" "}
            </Card.Title>
            <Card.Text>
              <NumberFormat
                value={data.deaths}
                displayType={"text"}
                thousandSeparator={true}
              >
                {data.deaths}
              </NumberFormat>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text" style={{ fontSize: "1rem" }}>
              Last updated {new Date(latest).toDateString()}
            </small>
          </Card.Footer>
        </Card>
        <Card
          bg="success"
          text="dark"
          style={{ cursor: "pointer", fontSize: "1.5rem" }}
        >
          <Card.Body>
            <Card.Title>
              {" "}
              <h1>
                {" "}
                <Badge bg="dark">Recovered</Badge>
              </h1>{" "}
            </Card.Title>
            <Card.Text>
              <NumberFormat
                value={data.recovered}
                displayType={"text"}
                thousandSeparator={true}
              >
                {data.recovered}
              </NumberFormat>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text" style={{ fontSize: "1rem" }}>
              Last updated {new Date(latest).toDateString()}
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
};

export default Covid;
