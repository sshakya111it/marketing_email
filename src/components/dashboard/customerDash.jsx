import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import {
    Input
} from 'reactstrap';
import axios from 'axios';
 class CustomerDash extends Component{
     constructor(props){
         super(props);
         this.state ={
             customers: [],
             filteredCustomers: [],
             newCustomerData: {
                 first_name: '',
                 last_name: '',
                 email: '',
                 checked: false
                 
             }
            
         }
    }
    componentDidMount(){
        this._refreshCustomers();
    }
    _refreshCustomers() {
        axios
        .get('http://3.24.149.94/apis/customers')
        .then(res => {
           this.setState({
               customers: res.data.results
           });
       });
   }
   render(){
    let result;
    if (this.state.filteredCustomers.length !== 0) {
        result = this.state.filteredCustomers;
    } else {
        result = this.state.customers;
    }
    let customers = result.map(customer => {
        return (
            <tr key={customer.id}>

                <div className='container'>
                    <div className='row'>
                       <td className='col-1'><input type='checkbox' value={customer.checked} /></td>
                       <td className='col-2'>{customer.first_name}</td>
                       <td className='col-2'>{customer.last_name}</td>
                       <td className='col-4'>{customer.email}</td>
                    </div>
                </div>
            </tr>
        );
    });
    return(
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <table>
                            <tbody>
                            <Input
                                    type="search"
                                    placeholder="Search customer by their names..."
                                    onChange={e => {
                                        this.setState({
                                            filteredCustomers: this.state.customers
                                            .filter(customer => {
                                                return customer.first_name.indexOf(e.target.value) !== -1;
                                            })
                                        });
                                    }}
                                />
                                {customers}
                            </tbody>
                        </table>  
                    </div>   
                </div>
            </div>)}
   }
 export default CustomerDash
