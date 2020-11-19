import Axios from "axios";
import React, { Component } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import ProductModal from '../modal/ProductModal';
import "./productList.css";

export default class ProductList extends Component {
  state = {
    products: [],
    addModalShow: false


  };
  async componentDidMount() {
    let results = await axios
      .get("http://13.55.254.225/apis/products/")
      .then((response) => {
        this.setState({ products: response.data.results });
      });
  }
   render() {
    let addModalClose=()=> this.setState({addModalShow:false});
    let data = this.state.products.map((list) => {
      return (
        <tr key={list.id}>
          <td><img src={list.product_image}></img></td>
          <td>{list.title}</td>
          <td>{list.price}</td>
          <td>{list.discount_price}</td>
          <td>{list.description}</td>
          <td>{list.product_address}</td>
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
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Discount Price</th>
                <th>Product Description</th>
                <th>Product Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {/* <tr>
                <td>
                    Mobile
                </td>
                <td>
                    1400
                </td>
                <td>
                    Electornics
                </td>
                <td>
                    XYZ XYZ
                </td>
                <Button variant="success" size="sm" className="mr-2" onClick={()=>this.setState({addModalShow:true})}>
              Edit
            </Button>

            <Button variant="danger" size="sm">
              Delete
            </Button>

            </tr> */} {data}
            </tbody>
          </Table>
          <br></br>
        </form>
      </div>
    );
  }
}
