import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default function Row1(props) {
  return (
    <Container>
      <Row className="row">
        <Col className="column1">
          <b id="city">{props.city}</b>
          <p>Saturday</p>
        </Col>
        <Col className="column1" id="temp1">
          {props.finalTemp}ºC
        </Col>
        <Col className="column" id="propert">
          Humidity: {props.finalHum}%<p>Precipitation: 5%</p>
        </Col>
        <Col className="column" id="propert">
          Wind: {props.finalWind}km/h
          <p>Realfeel: {props.finalFeels}ºC</p>
        </Col>
      </Row>
    </Container>
  );
}
