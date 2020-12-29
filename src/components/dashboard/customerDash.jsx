import React, { Component } from "react";
import { Table, Button, Form, Modal, FormControl } from "react-bootstrap";
import axios from "axios";

export default class CustomerList extends Component {
  state = {
    customers: [],


  };
  async componentDidMount() {
    let results = await axios
      .get("http://localhost:3000/customer")  // if i use the server location then, put response.data.results in line 17  VERY IMPORTANT
      .then((response) => {
        console.log(response)

        this.setState({ customers: response.data });
      });
  }
   render() {
    let data = this.state.customers.map((list) => {
      return (
        <tr key={list.id}>
        <td><FormControl type='checkbox'></FormControl></td>
          <td>{list.first_name}</td>
          <td>{list.last_name}</td>
          <td>{list.email}</td>
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
                <th><FormControl type='checkbox'></FormControl></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
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
