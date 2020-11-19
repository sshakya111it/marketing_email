import React, { Component } from "react";
import { Table, Button, Form, Modal, FormControl } from "react-bootstrap";
import axios from "axios";

export default class CustomerList extends Component {
  state = {
    customers: [],


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





// import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom'
// import {
//     Input
// } from 'reactstrap';
// import axios from 'axios';
//  class CustomerDash extends Component{
//      constructor(props){
//          super(props);
//          this.state ={
//              customers: [],
//              filteredCustomers: [],
//              newCustomerData: {
//                  first_name: '',
//                  last_name: '',
//                  email: '',
//                  checked: false
                 
//              }
            
//          }
//     }
//     componentDidMount(){
//         this._refreshCustomers();
//     }
//     _refreshCustomers() {
//         axios
//         .get('http://3.24.149.94/apis/customers')
//         .then(res => {
//            this.setState({
//                customers: res.data.results
//            });
//        });
//    }
//    render(){
//     let result;
//     if (this.state.filteredCustomers.length !== 0) {
//         result = this.state.filteredCustomers;
//     } else {
//         result = this.state.customers;
//     }
//     let customers = result.map(customer => {
//         return (
//             <tr key={customer.id}>

//                 <div className='container'>
//                     <div className='row'>
//                        <td className='col-1'><input type='checkbox' value={customer.checked} /></td>
//                        <td className='col-2'>{customer.first_name}</td>
//                        <td className='col-2'>{customer.last_name}</td>
//                        <td className='col-4'>{customer.email}</td>
//                     </div>
//                 </div>
//             </tr>
//         );
//     });
//     return(
//             <div>
//                 <div className='container-fluid'>
//                     <div className='row'>
//                         <table>
//                             <tbody>
//                             <Input
//                                     type="search"
//                                     placeholder="Search customer by their names..."
//                                     onChange={e => {
//                                         this.setState({
//                                             filteredCustomers: this.state.customers
//                                             .filter(customer => {
//                                                 return customer.first_name.indexOf(e.target.value) !== -1;
//                                             })
//                                         });
//                                     }}
//                                 />
//                                 {customers}
//                             </tbody>
//                         </table>  
//                     </div>   
//                 </div>
//             </div>)}
//    }
//  export default CustomerDash
