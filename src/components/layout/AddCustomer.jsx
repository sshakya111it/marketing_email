// import React, { Component } from "react";
// import { Form, Button, FormControl } from "react-bootstrap";
// import axios from 'axios';
// import "./Custom.css";

// export default class AddProduct extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       customers: [],
//       newCustomerData: {
//           first_Name: '',
//           last_Name: '',
//           email: '',
//           mobile_number: '',
//           customer_address: ''
          
//       },
//     }
//   }
  
//   // dataChange(ev){
//   //   this.setState({
//   //     [ev.target.first_name]:ev.target.value,
//   //     [ev.target.last_name]:ev.target.value,
//   //     [ev.target.email]:ev.target.value,
//   //     [ev.target.mobile_number]:ev.target.value,
//   //     [ev.target.customer_address]:ev.target.value,

//   //   })
//   // }
//   postData(e){
//      e.preventDegault()
//      axios.post('http://3.24.149.94/apis/customers/', this.state.newCustomerData).then((res) => {
//          console.log(res.data);
//       let { customers } = this.state;
//       customers.push(res.data.results);
//       this.setState({ customers, newCustomerData: {
//         first_name: '',
//         last_name: '',
//         email: '',
//         customer_address: '',
//         mobile_number: ''
//       } });
//   });      
//   }

//   render() {
//     return (
//       <div className="container addCustomer">
                          
//           <form action='' className="white">
//               <h5 className="grey-text text-darken-3">Add customer</h5>
//               <div className="input-field">
//                   <label for="First Name">First Name</label>
//                   <input 
//                           id="firstName"
//                           value={this.state.newCustomerData.first_name}
//                           onChange={e => {
//                               let { newCustomerData } = this.state;
//                               newCustomerData.first_name = e.target.value;
//                               this.setState({ newCustomerData });
//                               }}
//                   /> 
//               </div>
//               <div className="input-field">
//                   <label for="lastName">Last Name</label>
//                   <input 
//                           id="lastName"
//                           value={this.state.newCustomerData.last_Name}
//                           onChange={e => {
//                               let { newCustomerData } = this.state;
//                               newCustomerData.last_Name = e.target.value;
//                               this.setState({ newCustomerData });
//                           }}                        
//                   /> 
//               </div>
//               <div className="input-field">
//                   <label for="customer Details">Customer email</label>
//                   <input 
//                           id="email"
//                           value={this.state.newCustomerData.email}
//                           onChange={e => {
//                               let { newCustomerData } = this.state;
//                               newCustomerData.email = e.target.value;
//                               this.setState({ newCustomerData });
//                           }}                        
//                   /> 
//               </div>
//               <div className="input-field">
//                   <label for="Customer phone">Customer phone</label>
//                   <input 
//                           id="phone"
//                           value={this.state.newCustomerData.mobile_number}
//                           onChange={e => {
//                               let { newCustomerData } = this.state;
//                               newCustomerData.mobile_number = e.target.value;
//                               this.setState({ newCustomerData });
//                           }}                        
//                   /> 
//               </div>
//               <div className="input-field">
//                   <label for="Address">Address</label>
//                   <input 
//                           id="address"
//                           value={this.state.newCustomerData.customer_address}
//                           onChange={e => {
//                               let { newCustomerData } = this.state;
//                               newCustomerData.customer_address = e.target.value;
//                               this.setState({ newCustomerData });
//                               }}
//                   /> 
//               </div>
//               <button class="btn waves-effect waves-light"  onSubmit={this.postData.bind(this)}>Submit
//               </button>
//           </form>
//           <br />
//       </div>

//  );
//   }
// }
import React, { Component } from 'react'
import './Custom.css';
import axios from 'axios';
// import { Link } from 'react-router-dom'
import {Button, Form} from 'react-bootstrap';

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
    
    /*componentDidMount() {
      this._refreshCustomers();
    }*/

    addCustomer() {
        axios.post('http://13.55.254.225//apis/customers/', this.state.newCustomerData).then(res => {
            let { customers } = this.state;
            customers.push(res.data);
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
    /*editCustomer(id, first_name, last_name, email, customer_number, customer_address) {
        this.setState({
            editCustomerData: {id, first_name, last_name, email, customer_number, customer_address}
        });
    }
    updateCustomer() {
        let { first_name, last_name, email, customer_number, customer_address} = this.state.editCustomerData;
        axios
            .put('http://3.24.149.94/apis/customers/' + this.state.editCustomerData.id, {
                first_name: '',
                last_name: '',
                email: '',
                mobile_number: '',
                customer_address: ''
            })
            .then(response => {
                this._refreshCustomers();
                this.setState({ editCustomerData: {id:'', first_name:'', last_name:'', email: '', customer_number: '', customer_address: ''}})
            });
    }
    _refreshCustomers() {
         axios.get('http://3.24.149.94/apis/customers/').then(res => {
            this.setState({
                customers: res.data.results
            });
        });
    }*/
 
    
    
    render() {
        return (
            <div className="container addCustomer">
                                
                <Form className="white">
                    <h5 className="grey-text text-darken-3">Add customer</h5>
                    <div className="input-field">
                        <label for="First Name">First Name</label>
                        <input 
                                id="firstName"
                                value={this.state.newCustomerData.first_name}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.first_name = e.target.value;
                                    this.setState({ newCustomerData });
                                    }}
                        /> 
                    </div>
                    <div className="input-field">
                        <label for="lastName">Last Name</label>
                        <input 
                                id="lastName"
                                value={this.state.newCustomerData.last_name}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.last_name = e.target.value;
                                    this.setState({ newCustomerData });
                                }}                        
                        /> 
                    </div>
                    <div className="input-field">
                        <label for="customer Details">Customer email</label>
                        <input 
                                id="email"
                                value={this.state.newCustomerData.email}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.email = e.target.value;
                                    this.setState({ newCustomerData });
                                }}                        
                        /> 
                    </div>
                    <div className="input-field">
                        <label for="Customer phone">Customer phone</label>
                        <input 
                                id="phone"
                                value={this.state.newCustomerData.mobile_number}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.mobile_number = e.target.value;
                                    this.setState({ newCustomerData });
                                }}                        
                        /> 
                    </div>
                    <div className="input-field">
                        <label for="Address">Address</label>
                        <input 
                                id="address"
                                value={this.state.newCustomerData.customer_address}
                                onChange={e => {
                                    let { newCustomerData } = this.state;
                                    newCustomerData.customer_address = e.target.value;
                                    this.setState({ newCustomerData });
                                    }}
                        /> 
                    </div>
                    <Button class="btn waves-effect waves-light" onClick={this.addCustomer.bind(this)}>Submit
                    <i class="material-icons right">send</i>

                    </Button>
                </Form>
                <br />
                {/* <Link className="btn-link" to="/customerList">Click here to see list of all the customers</Link> */}
            </div>

       );
    }
}
export default AddCustomer