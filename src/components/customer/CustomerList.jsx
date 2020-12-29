import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import {
    Table,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import axios from 'axios';

class CustomerDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            filteredCustomers: [],
            newCustomerData: {
                first_name: '',
                last_name: '',
                email: '',
                mobile_number: '',
                customer_address: '',
                checked: false
                
            },
            searchData: {
                name: ''
            },
            editCustomerData: {
                id: '',
                first_name: '',
                last_name: '',
                email: '',
                mobile_number: '',
                customer_address: ''
            },
            newCustomerModal: false,
            editCustomerModal: false,
        }

        this.temp = '123'
        
    }
    componentDidMount() {
      this._refreshCustomers();
    }

    toggleNewCustomerModal() {
        this.setState({
            newCustomerModal: !this.state.newCustomerModal
        });
    }

    addCustomer() {
        axios.post('http://localhost:3000/customer', this.state.newCustomerData).then(res => {
            let { customers } = this.state;
            customers.push(res.data);
            this.setState({ customers, newCustomerModal: false, newCustomerData: {
              first_name: '',
              last_name: '',
              email: '',
              mobile_number: '',
              customer_address: '',
              checked: false
            } });
        });
    }
    toggleEditCustomerModal() {
        this.setState({
            editCustomerModal: !this.state.editCustomerModal
        });
    }
    editCustomer(id, first_name, last_name, email, mobile_number, customer_address) {
        this.setState({
            editCustomerData: { id, first_name, last_name, email, mobile_number, customer_address},
            editCustomerModal: !this.state.editCustomerModal
        });
    }
    updateCustomer() {
        let { first_name, last_name, email, mobile_number, customer_address} = this.state.editCustomerData;
        axios
            .put('http://localhost:3000/customer/' + this.state.editCustomerData.id, {
                first_name,
                last_name,
                email,
                mobile_number,
                customer_address
            })
            .then(response => {
                this._refreshCustomers();
                this.setState({editCustomerModal: false, editCustomerData: {id:'', first_name:'', last_name:'', email:'', mobile_number: '', customer_address:''}})
            });
    }

    deleteCustomer(id) {
        axios.delete('http://localhost:3000/customer/' + id).then(response => {
            this._refreshCustomers();
        });
    }
    _refreshCustomers() {
         axios.get('http://localhost:3000/customer').then(res => {
            this.setState({
                customers: res.data
            });
        });
    }
    render() {

        let data = this.state.customers.map((list) => {
          return (
            <tr key={list.id}>
              <td>{list.first_name}</td>
              <td>{list.last_name}</td>
              <td>{list.email}</td>
              <td>{list.mobile_number}</td>
              <td>{list.customer_address}</td>
              <td>
                <Button variant="success" size="sm" className="mr-2" 
                onClick={this.editCustomer.bind(this, list.id, list.first_name, list.last_name, list.email, list.mobile_number, list.customer_address)}>
                  Edit
                </Button>
                <Button variant="danger" size="sm" onClick={() => this.deleteCustomer(list.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        }); 

        // main render return ....
        return (
          <div>

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
                <Modal
                    isOpen={this.state.editCustomerModal}
                    toggle={this.toggleEditCustomerModal.bind(this)}
                >
                    <ModalHeader toggle={this.toggleEditCustomerModal.bind(this)}>
                        Edit customer detail
                    </ModalHeader>
                    <ModalBody>
                    <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                id="name"
                                value={this.state.editCustomerData.first_name}
                                onChange={e => {
                                    let { editCustomerData } = this.state;
                                    editCustomerData.first_name = e.target.value;
                                    this.setState({ editCustomerData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="last_name">Last Name</Label>
                            <Input
                                id="last_name"
                                value={this.state.editCustomerData.last_name}
                                onChange={e => {
                                    let { editCustomerData } = this.state;
                                    editCustomerData.last_name = e.target.value;
                                    this.setState({ editCustomerData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                value={this.state.editCustomerData.email}
                                onChange={e => {
                                    let { editCustomerData } = this.state;
                                    editCustomerData.email = e.target.value;
                                    this.setState({ editCustomerData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Mobile Number</Label>
                            <Input
                                id="phone"
                                value={this.state.editCustomerData.mobile_number}
                                onChange={e => {
                                    let { editCustomerData } = this.state;
                                    editCustomerData.mobile_number = e.target.value;
                                    this.setState({ editCustomerData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input
                                id="address"
                                value={this.state.editCustomerData.customer_address}
                                onChange={e => {
                                    let { editCustomerData } = this.state;
                                    editCustomerData.customer_address = e.target.value;
                                    this.setState({ editCustomerData });
                                }}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateCustomer.bind(this)}>
                            Update 
                        </Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditCustomerModal.bind(this)}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
                <nav className="navbar navbar-dark navbar-expand-sm fixed-bottom">
                    <footer id='foot'> 
                         <small>&copy; Copyright 2020, All right reserved </small> 
                    </footer>
                </nav>
              </div>
        );
    }
}

export default CustomerDashboard;



{/*import Axios from "axios";
import React, { Component } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import CustomerModal from '../modal/CustomerModal';
import { Link, Redirect } from 'react-router-dom'

export default class CustomerList extends Component {
  state = {
    customers: [],
    addModalShow: false,
  };
 componentDidMount() {
    this._refreshCustomers();

  }
  async _refreshCustomers(){
    let results = await axios
    .get("http://localhost:3000/customer")
    .then((response) => {
      console.log(response)

      this.setState({ customers: response.data });
    });

  }

  deleteCustomer(id) {
    axios.delete('http://localhost:3000/customer/' + id).then(response => {
        this._refreshCustomers();
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
            <Button variant="success" size="sm" className="mr-2" 
            onClick={()=>this.setState({addModalShow:true})}>
              Edit
            </Button>
            <CustomerModal 
              show={this.state.addModalShow}
              onHide={addModalClose}
            />
            <Button variant="danger" size="sm" onClick={() => this.deleteCustomer(list.id)}>
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
}*/}
