import Axios from "axios";
import React, { Component } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import CustomerModal from '../modal/CustomerModal';

export default class CustomerList extends Component {
  state = {
    customers: [],
    addModalShow: false


  };
  async componentDidMount() {
    let results = await axios
      .get("http://13.55.254.225/apis/customers/")
      .then((response) => {
        console.log(response)

        this.setState({ customers: response.data.results });
      });
  }
   render() {
    let addModalClose=()=> this.setState({addModalShow:false});
    let data = this.state.customers.map((list) => {
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
            <CustomerModal 
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
        <h2>Customer List</h2>
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
