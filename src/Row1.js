import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Row1(props) {
  return (
    <Container>
      <Row>
        <Col>
          <b id="city">{props.city}</b>
          <p>Saturday</p>
        </Col>
        <Col id="temp1">{props.finalTemp}ºC</Col>
        <Col id="propert">
          Humidity: {props.finalHum}%<p>Precipitation: %</p>
        </Col>
        <Col id="propert">
          Wind: {props.finalWind}km/h
          <p>Realfeel: {props.finalFeels}ºC</p>
        </Col>
      </Row>
    </Container>
  );
}
