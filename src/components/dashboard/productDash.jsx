import React, { Component } from "react";
import { Table, Button, Form, Modal, FormControl } from "react-bootstrap";
import axios from "axios";
import ProductModal from '../modal/ProductModal';
import "./productDash.css";

export default class ProductDash extends Component {
  state = {
    products: [],

  };
  async componentDidMount() {
    let results = await axios
      .get("http://localhost:3000/product")
      .then((response) => {
        this.setState({ products: response.data });
      });
  }
   render() {
    let data = this.state.products.map((list) => {
      return (
        <tr key={list.id}>
            <td><FormControl type='checkbox'></FormControl></td>
          <td>{list.title}</td>
        </tr>
      );
    });

    return (
      <div className="dashboard container">
        <br></br>
        <h2>Product List</h2>
        <br></br>
        <form>
          <Table striped bordered hover>
            <thead>
              <tr>
                  <th><FormControl type="checkbox"/></th>
                <th>Product Name</th>
              </tr>
            </thead>
            <tbody>
                 {data}
            </tbody>
          </Table>
          <br></br>
        </form>
      </div>
    );
  }
}










