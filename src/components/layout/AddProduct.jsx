import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap';
import "./Custom.css";

export default class AddProduct extends Component {
  render() {
    return (
      <div className="container addproduct">
        <form action="" className="white">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Product Category</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Product Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary">Add Product</Button>
        </form>
      </div>
    );
  }
}
