
import React, { Component } from 'react'
import './Custom.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'
import {Form, Button,} from 'react-bootstrap';

 class AddCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false,
            customers: [],
            newCustomerData: {
                first_name: '',
                last_name: '',
                email: '',
                mobile_number: '',
                customer_address: ''
                
            },
            editCustomerData: {
                id: '',
                first_name: '',
                last_name: '',
                email: '',
                mobile_number: '',
                customer_address: ''
            }
        }

        this.temp = '123'
        
    }
    addCustomer() {
        let results = axios.post('http://localhost:3000/customer', this.state.newCustomerData).then(res => {
            let { customers } = this.state;
            customers.push(res.data.results);
            console.log(customers);

            this.setState({ customers, newCustomerData: {
                first_name: '',
                last_name: '',
                email: '',
                mobile_number: '',
                customer_address: ''
           }
        });
        });
    }
    
    render() {
        return (
            <div className="container addCustomer">

                <div className="container addproduct">
                        <h3>Customer Details</h3>
                        <form action="" className="white">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" 
                                id="firstName"
                                value={this.state.newCustomerData.first_name}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.first_name = e.target.value;
                                    this.setState({ newCustomerData });
                                    }}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Second Name</Form.Label>
                            <Form.Control type="text" 
                                 id="lastName"
                                 value={this.state.newCustomerData.last_name}
                                 onChange={e => {
                                 let { newCustomerData } = this.state;
                                 newCustomerData.last_name = e.target.value;
                                 this.setState({ newCustomerData });
                                }}  
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" 
                                id="email"
                                value={this.state.newCustomerData.email}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.email = e.target.value;
                                    this.setState({ newCustomerData });
                                }}                            
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" 
                                id="phone"
                                value={this.state.newCustomerData.mobile_number}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.mobile_number = e.target.value;
                                    this.setState({ newCustomerData });
                                }}  
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows="3" 
                                id="address"
                                value={this.state.newCustomerData.customer_address}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.customer_address = e.target.value;
                                    this.setState({ newCustomerData });
                                    }}
                            />
                        </Form.Group>
                        <Link to="./customerlist"><Button variant="primary" onClick={this.addCustomer.bind(this)} >Add Product</Button></Link>
                        </form>
                    </div>
                <br />
            </div>

       );
    }
}
export default AddCustomer