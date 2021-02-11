import React from "react";
import { TextField } from "@material-ui/core";
import { Row, Col, Dropdown } from "react-bootstrap";

class SearchPage extends React.Component {
  render() {
    return (
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center ">
          {" "}
          <TextField
            className="textField"
            id="outlined-basic"
            label="Search"
            variant="outlined"
          />
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center ">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Search By
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Artist</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Album</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Track</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    );
  }
}
export default SearchPage;
