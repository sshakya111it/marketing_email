import React, { Component } from "react";
import { Table, Button, Form, Modal, FormControl } from "react-bootstrap";
import axios from "axios";
import ProductModal from '../modal/ProductModal';
import "./productDash.css";
import ProductCheckbox from "../SelectionandSend/ProductCheckbox";
import SelectAllCheckbox from "../SelectionandSend/selectallcheckbox";


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
          <td><ProductCheckbox productSelected= {list.id}/></td>
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
                <th><SelectAllCheckbox/></th>
                <th>Product Name</th>
              </tr>
            </thead>
            <tbody>
                 {data}
            </tbody>
          </Table>
          <br></br>
        </form>
        <h1>{this.props.selectedProduct}</h1>
      </div>
    );
  }
}










