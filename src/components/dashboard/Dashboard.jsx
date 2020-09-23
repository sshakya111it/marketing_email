import React, { Component } from 'react'
import ProductList from '../product/ProductList';
import CustomerList from '../customer/CustomerList';
import  '../layout/Custom.css';


export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <form>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Product List</th>
                                <th>Customer List</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><ProductList /></td>
                                <td><CustomerList /></td>
                            </tr>
                        </tbody>
                    </table>
                    <br></br>
                    <button class="btn waves-effect waves-light " type="submit" name="action">Send Email
                        <i class="material-icons right">send</i>
                    </button>
                </form>
                
            </div>
        )
    }
}
