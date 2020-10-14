import Axios from "axios";
import React, { Component } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import ProductModal from '../modal/ProductModal';

export default class ProductList extends Component {
  state = {
    products: [],
    addModalShow: false


  };
  async componentDidMount() {
    let results = await axios
      .get("http://3.24.149.94/apis/customers")
      .then((response) => {
        this.setState({ products: response.data.results });
      });
  }
   render() {
    let addModalClose=()=> this.setState({addModalShow:false});
    let data = this.state.products.map((list) => {
      return (
        <tr key={list.id}>
          <td>{list.first_name}</td>
          <td>{list.last_name}</td>
          <td>{list.email}</td>
          <td>{list.mobile_number}</td>
          <td>{list.customer_address}</td>
          <td>
            <Button variant="success" size="sm" className="mr-2" onClick={()=>this.setState({addModalShow:true})}>
              Edit
            </Button>
            <ProductModal 
              show={this.state.addModalShow}
              onHide={addModalClose}
            />
            <Button variant="danger" size="sm">
              Delete
            </Button>
          </td>
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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </Table>
          <br></br>
        </form>
      </div>
    );
  }
}
