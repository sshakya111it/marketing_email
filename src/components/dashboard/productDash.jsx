import React, { Component } from "react";
import { Table, Button, Form, Modal, FormControl } from "react-bootstrap";
import axios from "axios";
import ProductModal from '../modal/ProductModal';
import "./productDash.css";

export default class ProductDash extends Component {
  state = {
    products: [],

  };
  async componentDidMount() {
    let results = await axios
      .get("http://13.55.254.225/apis/products/")
      .then((response) => {
        this.setState({ products: response.data.results });
      });
  }
   render() {
    let data = this.state.products.map((list) => {
      return (
        <tr key={list.id}>
            <td><FormControl type='checkbox'></FormControl></td>
          <td>{list.title}</td>
        </tr>
      );
    });

    return (
      <div className="dashboard container">
        <br></br>
        <h2>Product List</h2>
        <br></br>
        <form>
          <Table striped bordered hover>
            <thead>
              <tr>
                  <th><FormControl type="checkbox"/></th>
                <th>Product Name</th>
              </tr>
            </thead>
            <tbody>
                 {data}
            </tbody>
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
//  class ProductDash extends Component{
//      constructor(props){
//          super(props);
//          this.state ={
//              products: [],
//              filteredProducts: [],
//              newProductsData: {
//                  title: '',
//                  checked: false
//              }
//          }
//     }
//     componentDidMount(){
//         this._refreshProducts();
//     }
//     _refreshProducts() {
//         axios
//         .get('http://3.24.149.94/apis/products')
//         .then(res => {
//            this.setState({
//                products: res.data.results
//            });
//        });
//    }
//    render(){
//     let result;
//     if (this.state.filteredProducts.length !== 0) {
//         result = this.state.filteredProducts;
//     } else {
//         result = this.state.products;
//     }
//     let products = result.map(product => {
//         return (
//             <tr key={product.id}>
//                 <div className='container'>
//                     <div className='row'>
//                        <td className='col-1'><input type='checkbox' value={product.checked} /></td>
//                        <td className='col-2'>{product.title}</td>
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
//                                     placeholder="Search product by their names..."
//                                     onChange={e => {
//                                         this.setState({
//                                             filteredProducts: this.state.products
//                                             .filter(product => {
//                                                 return product.title.indexOf(e.target.value) !== -1;
//                                             })
//                                         });
//                                     }}
//                                 />
//                                 {products}
//                             </tbody>
//                         </table>  
//                     </div>   
//                 </div>
//             </div>)}
//    }
//  export default ProductDash








