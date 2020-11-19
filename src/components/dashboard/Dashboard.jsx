import React, { Component } from 'react'
import ProductList from '../product/ProductList';
import CustomerList from '../customer/CustomerList';
import  '../layout/Custom.css';
import CustomerDashData from './customerDash'
import ProductDash from './productDash'


export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <form>
                    <table className='table'>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td><ProductDash /></td>
                                <td><CustomerDashData /></td>

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
