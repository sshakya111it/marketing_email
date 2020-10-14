import React, { Component } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import axios from 'axios';
import "./Custom.css";

export default class AddProduct extends Component {
  constructor(){
    super()
    this.state={
      customers: [],
      newCustomerData: {
          first_Name: '',
          last_Name: '',
          email: '',
          mobile_number: '',
          customer_address: ''
          
      },
    }
  }
  
  // dataChange(ev){
  //   this.setState({
  //     [ev.target.first_name]:ev.target.value,
  //     [ev.target.last_name]:ev.target.value,
  //     [ev.target.email]:ev.target.value,
  //     [ev.target.mobile_number]:ev.target.value,
  //     [ev.target.customer_address]:ev.target.value,

  //   })
  // }
  postData(e){
     e.preventDegault()
     console.log(this.state)

     axios.post('http://3.24.149.94/apis/customers/', this.state.newCustomerData).then(res => {
      let { customers } = this.state;
      customers.push(res.data.results);
      this.setState({ customers, newCustomerData: {
        first_name: '',
        last_name: '',
        email: '',
        customer_address: '',
        mobile_number: ''
      } });
  });      
  }

  _refreshCustomers() {
    axios.get('http://3.24.149.94/apis/customers/').then(res => {
       this.setState({
           customers: res.data.results
       });
   });
}
  render() {
    return (
      <div className="container addproduct">
        <h3>Customer Details</h3>
        <Form className="white">
          <Form.Group controlId="exampleForm.ControlInput1" >
            <Form.Label>First Name</Form.Label>
            <FormControl id="first_name" type="text"  value={this.state.newCustomerData.first_name}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.first_name = e.target.value;
                                    this.setState({ newCustomerData });
                                    }}  />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1"    >
            <Form.Label>Last Name</Form.Label>
            <FormControl id="last_name" type="text" value={this.state.newCustomerData.last_name}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.last_name = e.target.value;
                                    this.setState({ newCustomerData });
                                }}   />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1"                   >
            <Form.Label>Email</Form.Label>
            <FormControl id='email'type="email"  value={this.state.newCustomerData.email}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.email = e.target.value;
                                    this.setState({ newCustomerData });
                                }}    />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1"                        >
            <Form.Label>Number</Form.Label>
            <FormControl id="mobile_number,"type="text" value={this.state.newCustomerData.mobile_number}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.mobile_number = e.target.value;
                                    this.setState({ newCustomerData });
                                }}   />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1"  >
            <Form.Label>Address</Form.Label>
            <FormControl id="customer_address" type="text"  value={this.state.newCustomerData.customer_address}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.customer_address = e.target.value;
                                    this.setState({ newCustomerData });
                                    }} />
          </Form.Group>

          <Button variant="primary" type="submit" value="submit" onClick={this.postData.bind(this)}>Add Customer</Button>
        </Form>
      </div>
    );
  }
}
