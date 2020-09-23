import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap';

import "./Custom.css";

export default class AddProduct extends Component {
  render() {
    return (
      <div className="container addproduct">
        <form action="" className="white">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Button variant="primary">Add Customer</Button>
        </form>
      </div>
    );
  }
}
