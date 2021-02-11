import React from "react";
import SearchPage from "./components/SearchPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center allPage">
      <Row className="mt-5 mb-5">
        <Col>
          <SearchPage />
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
