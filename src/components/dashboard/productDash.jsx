import React, { Component } from "react";
import { Table, Button, Form, Modal, FormControl } from "react-bootstrap";
import axios from "axios";
import ProductModal from '../modal/ProductModal';
import "./productDash.css";
import ProductCheckbox from "../SelectionandSend/ProductCheckbox";
import SelectAllCheckbox from "../SelectionandSend/selectallcheckbox";


export default class ProductDash extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      selectedProduct: []
  
    };
  }
  async componentDidMount() {
    let results = await axios
      .get("http://localhost:3000/product")
      .then((response) => {
        this.setState({ products: response.data });
      });
  }
  onChange = e => {
    const selectedProduct = [...this.state.selectedProduct];
    this.setState({[e.target.name] : e.target.checked});
    selectedProduct.push({
        id: e.target.id,  value: e.target.id
    })
    this.setState({
        selectedProduct
    },
    () => {
        console.log(this.state.selectedProduct);
    }
    );   
}
   render() {
     
    let data = this.state.products.map((list) => {
      return (
        <tr key={list.id}>
          <td><input type="checkbox"
                       name="isChecked"
                       id= {list.id}
                       onChange={this.onChange} 

                ></input>
            </td>
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
      </div>
    );
  }
}










